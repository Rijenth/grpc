// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "auth.proto" (package "auth", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { AuthService } from "./auth";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { LoginResponse } from "./auth";
import type { LoginRequest } from "./auth";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service auth.AuthService
 */
export interface IAuthServiceClient {
    /**
     * @generated from protobuf rpc: Login(auth.LoginRequest) returns (auth.LoginResponse);
     */
    login(input: LoginRequest, options?: RpcOptions): UnaryCall<LoginRequest, LoginResponse>;
}
/**
 * @generated from protobuf service auth.AuthService
 */
export class AuthServiceClient implements IAuthServiceClient, ServiceInfo {
    typeName = AuthService.typeName;
    methods = AuthService.methods;
    options = AuthService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: Login(auth.LoginRequest) returns (auth.LoginResponse);
     */
    login(input: LoginRequest, options?: RpcOptions): UnaryCall<LoginRequest, LoginResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<LoginRequest, LoginResponse>("unary", this._transport, method, opt, input);
    }
}
