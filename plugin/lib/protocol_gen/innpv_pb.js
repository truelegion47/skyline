/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.ClientMessage', null, global);
goog.exportSymbol('proto.InitializeRequest', null, global);
goog.exportSymbol('proto.InitializeResponse', null, global);
goog.exportSymbol('proto.Path', null, global);
goog.exportSymbol('proto.ProtocolError', null, global);
goog.exportSymbol('proto.ServerMessage', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ClientMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ClientMessage.oneofGroups_);
};
goog.inherits(proto.ClientMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ClientMessage.displayName = 'proto.ClientMessage';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ClientMessage.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.ClientMessage.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  INITIALIZE: 1
};

/**
 * @return {proto.ClientMessage.PayloadCase}
 */
proto.ClientMessage.prototype.getPayloadCase = function() {
  return /** @type {proto.ClientMessage.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.ClientMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ClientMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ClientMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ClientMessage} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ClientMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    initialize: (f = msg.getInitialize()) && proto.InitializeRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ClientMessage}
 */
proto.ClientMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ClientMessage;
  return proto.ClientMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ClientMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ClientMessage}
 */
proto.ClientMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.InitializeRequest;
      reader.readMessage(value,proto.InitializeRequest.deserializeBinaryFromReader);
      msg.setInitialize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.ClientMessage} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ClientMessage.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ClientMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ClientMessage.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getInitialize();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.InitializeRequest.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ClientMessage} The clone.
 */
proto.ClientMessage.prototype.cloneMessage = function() {
  return /** @type {!proto.ClientMessage} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional InitializeRequest initialize = 1;
 * @return {proto.InitializeRequest}
 */
proto.ClientMessage.prototype.getInitialize = function() {
  return /** @type{proto.InitializeRequest} */ (
    jspb.Message.getWrapperField(this, proto.InitializeRequest, 1));
};


/** @param {proto.InitializeRequest|undefined} value  */
proto.ClientMessage.prototype.setInitialize = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.ClientMessage.oneofGroups_[0], value);
};


proto.ClientMessage.prototype.clearInitialize = function() {
  this.setInitialize(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ClientMessage.prototype.hasInitialize = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.InitializeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.InitializeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.InitializeRequest.displayName = 'proto.InitializeRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.InitializeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.InitializeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.InitializeRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.InitializeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.InitializeRequest}
 */
proto.InitializeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.InitializeRequest;
  return proto.InitializeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.InitializeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.InitializeRequest}
 */
proto.InitializeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.InitializeRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.InitializeRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.InitializeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.InitializeRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.InitializeRequest} The clone.
 */
proto.InitializeRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.InitializeRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ServerMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ServerMessage.oneofGroups_);
};
goog.inherits(proto.ServerMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ServerMessage.displayName = 'proto.ServerMessage';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ServerMessage.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.ServerMessage.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  ERROR: 1,
  INITIALIZE: 2
};

/**
 * @return {proto.ServerMessage.PayloadCase}
 */
proto.ServerMessage.prototype.getPayloadCase = function() {
  return /** @type {proto.ServerMessage.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.ServerMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ServerMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ServerMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ServerMessage} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ServerMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && proto.ProtocolError.toObject(includeInstance, f),
    initialize: (f = msg.getInitialize()) && proto.InitializeResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ServerMessage}
 */
proto.ServerMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ServerMessage;
  return proto.ServerMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ServerMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ServerMessage}
 */
proto.ServerMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ProtocolError;
      reader.readMessage(value,proto.ProtocolError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 2:
      var value = new proto.InitializeResponse;
      reader.readMessage(value,proto.InitializeResponse.deserializeBinaryFromReader);
      msg.setInitialize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.ServerMessage} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ServerMessage.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ServerMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ServerMessage.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getError();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ProtocolError.serializeBinaryToWriter
    );
  }
  f = this.getInitialize();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.InitializeResponse.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ServerMessage} The clone.
 */
proto.ServerMessage.prototype.cloneMessage = function() {
  return /** @type {!proto.ServerMessage} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ProtocolError error = 1;
 * @return {proto.ProtocolError}
 */
proto.ServerMessage.prototype.getError = function() {
  return /** @type{proto.ProtocolError} */ (
    jspb.Message.getWrapperField(this, proto.ProtocolError, 1));
};


/** @param {proto.ProtocolError|undefined} value  */
proto.ServerMessage.prototype.setError = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.ServerMessage.oneofGroups_[0], value);
};


proto.ServerMessage.prototype.clearError = function() {
  this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ServerMessage.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional InitializeResponse initialize = 2;
 * @return {proto.InitializeResponse}
 */
proto.ServerMessage.prototype.getInitialize = function() {
  return /** @type{proto.InitializeResponse} */ (
    jspb.Message.getWrapperField(this, proto.InitializeResponse, 2));
};


/** @param {proto.InitializeResponse|undefined} value  */
proto.ServerMessage.prototype.setInitialize = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.ServerMessage.oneofGroups_[0], value);
};


proto.ServerMessage.prototype.clearInitialize = function() {
  this.setInitialize(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ServerMessage.prototype.hasInitialize = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.InitializeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.InitializeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.InitializeResponse.displayName = 'proto.InitializeResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.InitializeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.InitializeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.InitializeResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.InitializeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    serverProjectRoot: msg.getServerProjectRoot(),
    entryPoint: (f = msg.getEntryPoint()) && proto.Path.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.InitializeResponse}
 */
proto.InitializeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.InitializeResponse;
  return proto.InitializeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.InitializeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.InitializeResponse}
 */
proto.InitializeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServerProjectRoot(value);
      break;
    case 2:
      var value = new proto.Path;
      reader.readMessage(value,proto.Path.deserializeBinaryFromReader);
      msg.setEntryPoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.InitializeResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.InitializeResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.InitializeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.InitializeResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getServerProjectRoot();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getEntryPoint();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Path.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.InitializeResponse} The clone.
 */
proto.InitializeResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.InitializeResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string server_project_root = 1;
 * @return {string}
 */
proto.InitializeResponse.prototype.getServerProjectRoot = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.InitializeResponse.prototype.setServerProjectRoot = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional Path entry_point = 2;
 * @return {proto.Path}
 */
proto.InitializeResponse.prototype.getEntryPoint = function() {
  return /** @type{proto.Path} */ (
    jspb.Message.getWrapperField(this, proto.Path, 2));
};


/** @param {proto.Path|undefined} value  */
proto.InitializeResponse.prototype.setEntryPoint = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.InitializeResponse.prototype.clearEntryPoint = function() {
  this.setEntryPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.InitializeResponse.prototype.hasEntryPoint = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ProtocolError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtocolError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ProtocolError.displayName = 'proto.ProtocolError';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ProtocolError.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtocolError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtocolError} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ProtocolError.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorCode: msg.getErrorCode()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ProtocolError}
 */
proto.ProtocolError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtocolError;
  return proto.ProtocolError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtocolError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtocolError}
 */
proto.ProtocolError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setErrorCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.ProtocolError} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ProtocolError.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ProtocolError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ProtocolError.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getErrorCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ProtocolError} The clone.
 */
proto.ProtocolError.prototype.cloneMessage = function() {
  return /** @type {!proto.ProtocolError} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint32 error_code = 1;
 * @return {number}
 */
proto.ProtocolError.prototype.getErrorCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.ProtocolError.prototype.setErrorCode = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Path = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Path.repeatedFields_, null);
};
goog.inherits(proto.Path, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Path.displayName = 'proto.Path';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Path.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Path.prototype.toObject = function(opt_includeInstance) {
  return proto.Path.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Path} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Path.toObject = function(includeInstance, msg) {
  var f, obj = {
    componentList: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Path}
 */
proto.Path.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Path;
  return proto.Path.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Path} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Path}
 */
proto.Path.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.getComponentList().push(value);
      msg.setComponentList(msg.getComponentList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.Path} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Path.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Path.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.Path.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getComponentList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.Path} The clone.
 */
proto.Path.prototype.cloneMessage = function() {
  return /** @type {!proto.Path} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated string component = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.Path.prototype.getComponentList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 1));
};


/** @param {Array.<string>} value  */
proto.Path.prototype.setComponentList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


proto.Path.prototype.clearComponentList = function() {
  jspb.Message.setField(this, 1, []);
};


goog.object.extend(exports, proto);
