import torch
import inspect
import weakref

from tracker._base import _TrackerBase
from tracker._utils import tensor_size_bytes
from tracker.call_stack import CallStack
from hook_manager import HookManager


class _WeightsTracker(_TrackerBase):
    def __init__(self):
        super().__init__()
        self._hook_manager = HookManager()
        self._module_parameters = weakref.WeakKeyDictionary()

    def start_tracking(self):
        super().start_tracking()
        self._hook_manager.attach_hook(
            torch.nn.Module,
            'register_parameter',
            self._register_parameter_hook_creator,
        )

    def stop_tracking(self):
        super().stop_tracking()
        self._hook_manager.remove_hooks()

    def get_report(self):
        for param, (name, stack) in self._module_parameters.items():
            if not param.is_cuda:
                continue
            param_size_bytes = tensor_size_bytes(param)
            grad_size_bytes = tensor_size_bytes(param.grad)
        return []

    def _register_parameter_hook_creator(self, func):
        def hook(*args, **kwargs):
            name = args[1]
            parameter = args[2]
            retval = func(*args, **kwargs)
            if parameter is not None:
                self._module_parameters[parameter] = (
                    name,
                    CallStack.from_here(start_from=2),
                )
            return retval
        return hook
