import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly MESSAGES: "MESSAGES";
    readonly RENTALS: "RENTALS";
    readonly USERS: "USERS";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const MESSAGESScalarFieldEnum: {
    readonly id: "id";
    readonly rental_id: "rental_id";
    readonly user_id: "user_id";
    readonly message: "message";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type MESSAGESScalarFieldEnum = (typeof MESSAGESScalarFieldEnum)[keyof typeof MESSAGESScalarFieldEnum];
export declare const RENTALSScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly surface: "surface";
    readonly price: "price";
    readonly picture: "picture";
    readonly description: "description";
    readonly owner_id: "owner_id";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type RENTALSScalarFieldEnum = (typeof RENTALSScalarFieldEnum)[keyof typeof RENTALSScalarFieldEnum];
export declare const USERSScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly name: "name";
    readonly password: "password";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type USERSScalarFieldEnum = (typeof USERSScalarFieldEnum)[keyof typeof USERSScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const MESSAGESOrderByRelevanceFieldEnum: {
    readonly message: "message";
};
export type MESSAGESOrderByRelevanceFieldEnum = (typeof MESSAGESOrderByRelevanceFieldEnum)[keyof typeof MESSAGESOrderByRelevanceFieldEnum];
export declare const RENTALSOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly picture: "picture";
    readonly description: "description";
};
export type RENTALSOrderByRelevanceFieldEnum = (typeof RENTALSOrderByRelevanceFieldEnum)[keyof typeof RENTALSOrderByRelevanceFieldEnum];
export declare const USERSOrderByRelevanceFieldEnum: {
    readonly email: "email";
    readonly name: "name";
    readonly password: "password";
};
export type USERSOrderByRelevanceFieldEnum = (typeof USERSOrderByRelevanceFieldEnum)[keyof typeof USERSOrderByRelevanceFieldEnum];
