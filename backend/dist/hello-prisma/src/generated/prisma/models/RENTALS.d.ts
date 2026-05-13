import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RENTALSModel = runtime.Types.Result.DefaultSelection<Prisma.$RENTALSPayload>;
export type AggregateRENTALS = {
    _count: RENTALSCountAggregateOutputType | null;
    _avg: RENTALSAvgAggregateOutputType | null;
    _sum: RENTALSSumAggregateOutputType | null;
    _min: RENTALSMinAggregateOutputType | null;
    _max: RENTALSMaxAggregateOutputType | null;
};
export type RENTALSAvgAggregateOutputType = {
    id: number | null;
    surface: runtime.Decimal | null;
    price: runtime.Decimal | null;
    owner_id: number | null;
};
export type RENTALSSumAggregateOutputType = {
    id: number | null;
    surface: runtime.Decimal | null;
    price: runtime.Decimal | null;
    owner_id: number | null;
};
export type RENTALSMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    surface: runtime.Decimal | null;
    price: runtime.Decimal | null;
    picture: string | null;
    description: string | null;
    owner_id: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type RENTALSMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    surface: runtime.Decimal | null;
    price: runtime.Decimal | null;
    picture: string | null;
    description: string | null;
    owner_id: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type RENTALSCountAggregateOutputType = {
    id: number;
    name: number;
    surface: number;
    price: number;
    picture: number;
    description: number;
    owner_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type RENTALSAvgAggregateInputType = {
    id?: true;
    surface?: true;
    price?: true;
    owner_id?: true;
};
export type RENTALSSumAggregateInputType = {
    id?: true;
    surface?: true;
    price?: true;
    owner_id?: true;
};
export type RENTALSMinAggregateInputType = {
    id?: true;
    name?: true;
    surface?: true;
    price?: true;
    picture?: true;
    description?: true;
    owner_id?: true;
    created_at?: true;
    updated_at?: true;
};
export type RENTALSMaxAggregateInputType = {
    id?: true;
    name?: true;
    surface?: true;
    price?: true;
    picture?: true;
    description?: true;
    owner_id?: true;
    created_at?: true;
    updated_at?: true;
};
export type RENTALSCountAggregateInputType = {
    id?: true;
    name?: true;
    surface?: true;
    price?: true;
    picture?: true;
    description?: true;
    owner_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type RENTALSAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RENTALSWhereInput;
    orderBy?: Prisma.RENTALSOrderByWithRelationInput | Prisma.RENTALSOrderByWithRelationInput[];
    cursor?: Prisma.RENTALSWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RENTALSCountAggregateInputType;
    _avg?: RENTALSAvgAggregateInputType;
    _sum?: RENTALSSumAggregateInputType;
    _min?: RENTALSMinAggregateInputType;
    _max?: RENTALSMaxAggregateInputType;
};
export type GetRENTALSAggregateType<T extends RENTALSAggregateArgs> = {
    [P in keyof T & keyof AggregateRENTALS]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRENTALS[P]> : Prisma.GetScalarType<T[P], AggregateRENTALS[P]>;
};
export type RENTALSGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RENTALSWhereInput;
    orderBy?: Prisma.RENTALSOrderByWithAggregationInput | Prisma.RENTALSOrderByWithAggregationInput[];
    by: Prisma.RENTALSScalarFieldEnum[] | Prisma.RENTALSScalarFieldEnum;
    having?: Prisma.RENTALSScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RENTALSCountAggregateInputType | true;
    _avg?: RENTALSAvgAggregateInputType;
    _sum?: RENTALSSumAggregateInputType;
    _min?: RENTALSMinAggregateInputType;
    _max?: RENTALSMaxAggregateInputType;
};
export type RENTALSGroupByOutputType = {
    id: number;
    name: string;
    surface: runtime.Decimal;
    price: runtime.Decimal;
    picture: string | null;
    description: string;
    owner_id: number;
    created_at: Date | null;
    updated_at: Date | null;
    _count: RENTALSCountAggregateOutputType | null;
    _avg: RENTALSAvgAggregateOutputType | null;
    _sum: RENTALSSumAggregateOutputType | null;
    _min: RENTALSMinAggregateOutputType | null;
    _max: RENTALSMaxAggregateOutputType | null;
};
export type GetRENTALSGroupByPayload<T extends RENTALSGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RENTALSGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RENTALSGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RENTALSGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RENTALSGroupByOutputType[P]>;
}>>;
export type RENTALSWhereInput = {
    AND?: Prisma.RENTALSWhereInput | Prisma.RENTALSWhereInput[];
    OR?: Prisma.RENTALSWhereInput[];
    NOT?: Prisma.RENTALSWhereInput | Prisma.RENTALSWhereInput[];
    id?: Prisma.IntFilter<"RENTALS"> | number;
    name?: Prisma.StringFilter<"RENTALS"> | string;
    surface?: Prisma.DecimalFilter<"RENTALS"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    price?: Prisma.DecimalFilter<"RENTALS"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    picture?: Prisma.StringNullableFilter<"RENTALS"> | string | null;
    description?: Prisma.StringFilter<"RENTALS"> | string;
    owner_id?: Prisma.IntFilter<"RENTALS"> | number;
    created_at?: Prisma.DateTimeNullableFilter<"RENTALS"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"RENTALS"> | Date | string | null;
    MESSAGES?: Prisma.MESSAGESListRelationFilter;
    USERS?: Prisma.XOR<Prisma.USERSScalarRelationFilter, Prisma.USERSWhereInput>;
};
export type RENTALSOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    surface?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    picture?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrder;
    owner_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    MESSAGES?: Prisma.MESSAGESOrderByRelationAggregateInput;
    USERS?: Prisma.USERSOrderByWithRelationInput;
    _relevance?: Prisma.RENTALSOrderByRelevanceInput;
};
export type RENTALSWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.RENTALSWhereInput | Prisma.RENTALSWhereInput[];
    OR?: Prisma.RENTALSWhereInput[];
    NOT?: Prisma.RENTALSWhereInput | Prisma.RENTALSWhereInput[];
    name?: Prisma.StringFilter<"RENTALS"> | string;
    surface?: Prisma.DecimalFilter<"RENTALS"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    price?: Prisma.DecimalFilter<"RENTALS"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    picture?: Prisma.StringNullableFilter<"RENTALS"> | string | null;
    description?: Prisma.StringFilter<"RENTALS"> | string;
    owner_id?: Prisma.IntFilter<"RENTALS"> | number;
    created_at?: Prisma.DateTimeNullableFilter<"RENTALS"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"RENTALS"> | Date | string | null;
    MESSAGES?: Prisma.MESSAGESListRelationFilter;
    USERS?: Prisma.XOR<Prisma.USERSScalarRelationFilter, Prisma.USERSWhereInput>;
}, "id">;
export type RENTALSOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    surface?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    picture?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrder;
    owner_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.RENTALSCountOrderByAggregateInput;
    _avg?: Prisma.RENTALSAvgOrderByAggregateInput;
    _max?: Prisma.RENTALSMaxOrderByAggregateInput;
    _min?: Prisma.RENTALSMinOrderByAggregateInput;
    _sum?: Prisma.RENTALSSumOrderByAggregateInput;
};
export type RENTALSScalarWhereWithAggregatesInput = {
    AND?: Prisma.RENTALSScalarWhereWithAggregatesInput | Prisma.RENTALSScalarWhereWithAggregatesInput[];
    OR?: Prisma.RENTALSScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RENTALSScalarWhereWithAggregatesInput | Prisma.RENTALSScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"RENTALS"> | number;
    name?: Prisma.StringWithAggregatesFilter<"RENTALS"> | string;
    surface?: Prisma.DecimalWithAggregatesFilter<"RENTALS"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    price?: Prisma.DecimalWithAggregatesFilter<"RENTALS"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    picture?: Prisma.StringNullableWithAggregatesFilter<"RENTALS"> | string | null;
    description?: Prisma.StringWithAggregatesFilter<"RENTALS"> | string;
    owner_id?: Prisma.IntWithAggregatesFilter<"RENTALS"> | number;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"RENTALS"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"RENTALS"> | Date | string | null;
};
export type RENTALSCreateInput = {
    name: string;
    surface: runtime.Decimal | runtime.DecimalJsLike | number | string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    picture?: string | null;
    description: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    MESSAGES?: Prisma.MESSAGESCreateNestedManyWithoutRENTALSInput;
    USERS: Prisma.USERSCreateNestedOneWithoutRENTALSInput;
};
export type RENTALSUncheckedCreateInput = {
    id?: number;
    name: string;
    surface: runtime.Decimal | runtime.DecimalJsLike | number | string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    picture?: string | null;
    description: string;
    owner_id: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    MESSAGES?: Prisma.MESSAGESUncheckedCreateNestedManyWithoutRENTALSInput;
};
export type RENTALSUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surface?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    picture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    MESSAGES?: Prisma.MESSAGESUpdateManyWithoutRENTALSNestedInput;
    USERS?: Prisma.USERSUpdateOneRequiredWithoutRENTALSNestedInput;
};
export type RENTALSUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surface?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    picture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    MESSAGES?: Prisma.MESSAGESUncheckedUpdateManyWithoutRENTALSNestedInput;
};
export type RENTALSCreateManyInput = {
    id?: number;
    name: string;
    surface: runtime.Decimal | runtime.DecimalJsLike | number | string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    picture?: string | null;
    description: string;
    owner_id: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type RENTALSUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surface?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    picture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RENTALSUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surface?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    picture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RENTALSScalarRelationFilter = {
    is?: Prisma.RENTALSWhereInput;
    isNot?: Prisma.RENTALSWhereInput;
};
export type RENTALSOrderByRelevanceInput = {
    fields: Prisma.RENTALSOrderByRelevanceFieldEnum | Prisma.RENTALSOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type RENTALSCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    surface?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    picture?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    owner_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type RENTALSAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    surface?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    owner_id?: Prisma.SortOrder;
};
export type RENTALSMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    surface?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    picture?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    owner_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type RENTALSMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    surface?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    picture?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    owner_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type RENTALSSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    surface?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    owner_id?: Prisma.SortOrder;
};
export type RENTALSListRelationFilter = {
    every?: Prisma.RENTALSWhereInput;
    some?: Prisma.RENTALSWhereInput;
    none?: Prisma.RENTALSWhereInput;
};
export type RENTALSOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RENTALSCreateNestedOneWithoutMESSAGESInput = {
    create?: Prisma.XOR<Prisma.RENTALSCreateWithoutMESSAGESInput, Prisma.RENTALSUncheckedCreateWithoutMESSAGESInput>;
    connectOrCreate?: Prisma.RENTALSCreateOrConnectWithoutMESSAGESInput;
    connect?: Prisma.RENTALSWhereUniqueInput;
};
export type RENTALSUpdateOneRequiredWithoutMESSAGESNestedInput = {
    create?: Prisma.XOR<Prisma.RENTALSCreateWithoutMESSAGESInput, Prisma.RENTALSUncheckedCreateWithoutMESSAGESInput>;
    connectOrCreate?: Prisma.RENTALSCreateOrConnectWithoutMESSAGESInput;
    upsert?: Prisma.RENTALSUpsertWithoutMESSAGESInput;
    connect?: Prisma.RENTALSWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RENTALSUpdateToOneWithWhereWithoutMESSAGESInput, Prisma.RENTALSUpdateWithoutMESSAGESInput>, Prisma.RENTALSUncheckedUpdateWithoutMESSAGESInput>;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type RENTALSCreateNestedManyWithoutUSERSInput = {
    create?: Prisma.XOR<Prisma.RENTALSCreateWithoutUSERSInput, Prisma.RENTALSUncheckedCreateWithoutUSERSInput> | Prisma.RENTALSCreateWithoutUSERSInput[] | Prisma.RENTALSUncheckedCreateWithoutUSERSInput[];
    connectOrCreate?: Prisma.RENTALSCreateOrConnectWithoutUSERSInput | Prisma.RENTALSCreateOrConnectWithoutUSERSInput[];
    createMany?: Prisma.RENTALSCreateManyUSERSInputEnvelope;
    connect?: Prisma.RENTALSWhereUniqueInput | Prisma.RENTALSWhereUniqueInput[];
};
export type RENTALSUncheckedCreateNestedManyWithoutUSERSInput = {
    create?: Prisma.XOR<Prisma.RENTALSCreateWithoutUSERSInput, Prisma.RENTALSUncheckedCreateWithoutUSERSInput> | Prisma.RENTALSCreateWithoutUSERSInput[] | Prisma.RENTALSUncheckedCreateWithoutUSERSInput[];
    connectOrCreate?: Prisma.RENTALSCreateOrConnectWithoutUSERSInput | Prisma.RENTALSCreateOrConnectWithoutUSERSInput[];
    createMany?: Prisma.RENTALSCreateManyUSERSInputEnvelope;
    connect?: Prisma.RENTALSWhereUniqueInput | Prisma.RENTALSWhereUniqueInput[];
};
export type RENTALSUpdateManyWithoutUSERSNestedInput = {
    create?: Prisma.XOR<Prisma.RENTALSCreateWithoutUSERSInput, Prisma.RENTALSUncheckedCreateWithoutUSERSInput> | Prisma.RENTALSCreateWithoutUSERSInput[] | Prisma.RENTALSUncheckedCreateWithoutUSERSInput[];
    connectOrCreate?: Prisma.RENTALSCreateOrConnectWithoutUSERSInput | Prisma.RENTALSCreateOrConnectWithoutUSERSInput[];
    upsert?: Prisma.RENTALSUpsertWithWhereUniqueWithoutUSERSInput | Prisma.RENTALSUpsertWithWhereUniqueWithoutUSERSInput[];
    createMany?: Prisma.RENTALSCreateManyUSERSInputEnvelope;
    set?: Prisma.RENTALSWhereUniqueInput | Prisma.RENTALSWhereUniqueInput[];
    disconnect?: Prisma.RENTALSWhereUniqueInput | Prisma.RENTALSWhereUniqueInput[];
    delete?: Prisma.RENTALSWhereUniqueInput | Prisma.RENTALSWhereUniqueInput[];
    connect?: Prisma.RENTALSWhereUniqueInput | Prisma.RENTALSWhereUniqueInput[];
    update?: Prisma.RENTALSUpdateWithWhereUniqueWithoutUSERSInput | Prisma.RENTALSUpdateWithWhereUniqueWithoutUSERSInput[];
    updateMany?: Prisma.RENTALSUpdateManyWithWhereWithoutUSERSInput | Prisma.RENTALSUpdateManyWithWhereWithoutUSERSInput[];
    deleteMany?: Prisma.RENTALSScalarWhereInput | Prisma.RENTALSScalarWhereInput[];
};
export type RENTALSUncheckedUpdateManyWithoutUSERSNestedInput = {
    create?: Prisma.XOR<Prisma.RENTALSCreateWithoutUSERSInput, Prisma.RENTALSUncheckedCreateWithoutUSERSInput> | Prisma.RENTALSCreateWithoutUSERSInput[] | Prisma.RENTALSUncheckedCreateWithoutUSERSInput[];
    connectOrCreate?: Prisma.RENTALSCreateOrConnectWithoutUSERSInput | Prisma.RENTALSCreateOrConnectWithoutUSERSInput[];
    upsert?: Prisma.RENTALSUpsertWithWhereUniqueWithoutUSERSInput | Prisma.RENTALSUpsertWithWhereUniqueWithoutUSERSInput[];
    createMany?: Prisma.RENTALSCreateManyUSERSInputEnvelope;
    set?: Prisma.RENTALSWhereUniqueInput | Prisma.RENTALSWhereUniqueInput[];
    disconnect?: Prisma.RENTALSWhereUniqueInput | Prisma.RENTALSWhereUniqueInput[];
    delete?: Prisma.RENTALSWhereUniqueInput | Prisma.RENTALSWhereUniqueInput[];
    connect?: Prisma.RENTALSWhereUniqueInput | Prisma.RENTALSWhereUniqueInput[];
    update?: Prisma.RENTALSUpdateWithWhereUniqueWithoutUSERSInput | Prisma.RENTALSUpdateWithWhereUniqueWithoutUSERSInput[];
    updateMany?: Prisma.RENTALSUpdateManyWithWhereWithoutUSERSInput | Prisma.RENTALSUpdateManyWithWhereWithoutUSERSInput[];
    deleteMany?: Prisma.RENTALSScalarWhereInput | Prisma.RENTALSScalarWhereInput[];
};
export type RENTALSCreateWithoutMESSAGESInput = {
    name: string;
    surface: runtime.Decimal | runtime.DecimalJsLike | number | string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    picture?: string | null;
    description: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    USERS: Prisma.USERSCreateNestedOneWithoutRENTALSInput;
};
export type RENTALSUncheckedCreateWithoutMESSAGESInput = {
    id?: number;
    name: string;
    surface: runtime.Decimal | runtime.DecimalJsLike | number | string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    picture?: string | null;
    description: string;
    owner_id: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type RENTALSCreateOrConnectWithoutMESSAGESInput = {
    where: Prisma.RENTALSWhereUniqueInput;
    create: Prisma.XOR<Prisma.RENTALSCreateWithoutMESSAGESInput, Prisma.RENTALSUncheckedCreateWithoutMESSAGESInput>;
};
export type RENTALSUpsertWithoutMESSAGESInput = {
    update: Prisma.XOR<Prisma.RENTALSUpdateWithoutMESSAGESInput, Prisma.RENTALSUncheckedUpdateWithoutMESSAGESInput>;
    create: Prisma.XOR<Prisma.RENTALSCreateWithoutMESSAGESInput, Prisma.RENTALSUncheckedCreateWithoutMESSAGESInput>;
    where?: Prisma.RENTALSWhereInput;
};
export type RENTALSUpdateToOneWithWhereWithoutMESSAGESInput = {
    where?: Prisma.RENTALSWhereInput;
    data: Prisma.XOR<Prisma.RENTALSUpdateWithoutMESSAGESInput, Prisma.RENTALSUncheckedUpdateWithoutMESSAGESInput>;
};
export type RENTALSUpdateWithoutMESSAGESInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surface?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    picture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    USERS?: Prisma.USERSUpdateOneRequiredWithoutRENTALSNestedInput;
};
export type RENTALSUncheckedUpdateWithoutMESSAGESInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surface?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    picture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RENTALSCreateWithoutUSERSInput = {
    name: string;
    surface: runtime.Decimal | runtime.DecimalJsLike | number | string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    picture?: string | null;
    description: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    MESSAGES?: Prisma.MESSAGESCreateNestedManyWithoutRENTALSInput;
};
export type RENTALSUncheckedCreateWithoutUSERSInput = {
    id?: number;
    name: string;
    surface: runtime.Decimal | runtime.DecimalJsLike | number | string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    picture?: string | null;
    description: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    MESSAGES?: Prisma.MESSAGESUncheckedCreateNestedManyWithoutRENTALSInput;
};
export type RENTALSCreateOrConnectWithoutUSERSInput = {
    where: Prisma.RENTALSWhereUniqueInput;
    create: Prisma.XOR<Prisma.RENTALSCreateWithoutUSERSInput, Prisma.RENTALSUncheckedCreateWithoutUSERSInput>;
};
export type RENTALSCreateManyUSERSInputEnvelope = {
    data: Prisma.RENTALSCreateManyUSERSInput | Prisma.RENTALSCreateManyUSERSInput[];
    skipDuplicates?: boolean;
};
export type RENTALSUpsertWithWhereUniqueWithoutUSERSInput = {
    where: Prisma.RENTALSWhereUniqueInput;
    update: Prisma.XOR<Prisma.RENTALSUpdateWithoutUSERSInput, Prisma.RENTALSUncheckedUpdateWithoutUSERSInput>;
    create: Prisma.XOR<Prisma.RENTALSCreateWithoutUSERSInput, Prisma.RENTALSUncheckedCreateWithoutUSERSInput>;
};
export type RENTALSUpdateWithWhereUniqueWithoutUSERSInput = {
    where: Prisma.RENTALSWhereUniqueInput;
    data: Prisma.XOR<Prisma.RENTALSUpdateWithoutUSERSInput, Prisma.RENTALSUncheckedUpdateWithoutUSERSInput>;
};
export type RENTALSUpdateManyWithWhereWithoutUSERSInput = {
    where: Prisma.RENTALSScalarWhereInput;
    data: Prisma.XOR<Prisma.RENTALSUpdateManyMutationInput, Prisma.RENTALSUncheckedUpdateManyWithoutUSERSInput>;
};
export type RENTALSScalarWhereInput = {
    AND?: Prisma.RENTALSScalarWhereInput | Prisma.RENTALSScalarWhereInput[];
    OR?: Prisma.RENTALSScalarWhereInput[];
    NOT?: Prisma.RENTALSScalarWhereInput | Prisma.RENTALSScalarWhereInput[];
    id?: Prisma.IntFilter<"RENTALS"> | number;
    name?: Prisma.StringFilter<"RENTALS"> | string;
    surface?: Prisma.DecimalFilter<"RENTALS"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    price?: Prisma.DecimalFilter<"RENTALS"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    picture?: Prisma.StringNullableFilter<"RENTALS"> | string | null;
    description?: Prisma.StringFilter<"RENTALS"> | string;
    owner_id?: Prisma.IntFilter<"RENTALS"> | number;
    created_at?: Prisma.DateTimeNullableFilter<"RENTALS"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"RENTALS"> | Date | string | null;
};
export type RENTALSCreateManyUSERSInput = {
    id?: number;
    name: string;
    surface: runtime.Decimal | runtime.DecimalJsLike | number | string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    picture?: string | null;
    description: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type RENTALSUpdateWithoutUSERSInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surface?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    picture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    MESSAGES?: Prisma.MESSAGESUpdateManyWithoutRENTALSNestedInput;
};
export type RENTALSUncheckedUpdateWithoutUSERSInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surface?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    picture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    MESSAGES?: Prisma.MESSAGESUncheckedUpdateManyWithoutRENTALSNestedInput;
};
export type RENTALSUncheckedUpdateManyWithoutUSERSInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surface?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    picture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RENTALSCountOutputType = {
    MESSAGES: number;
};
export type RENTALSCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MESSAGES?: boolean | RENTALSCountOutputTypeCountMESSAGESArgs;
};
export type RENTALSCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RENTALSCountOutputTypeSelect<ExtArgs> | null;
};
export type RENTALSCountOutputTypeCountMESSAGESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MESSAGESWhereInput;
};
export type RENTALSSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    surface?: boolean;
    price?: boolean;
    picture?: boolean;
    description?: boolean;
    owner_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    MESSAGES?: boolean | Prisma.RENTALS$MESSAGESArgs<ExtArgs>;
    USERS?: boolean | Prisma.USERSDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.RENTALSCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rENTALS"]>;
export type RENTALSSelectScalar = {
    id?: boolean;
    name?: boolean;
    surface?: boolean;
    price?: boolean;
    picture?: boolean;
    description?: boolean;
    owner_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type RENTALSOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "surface" | "price" | "picture" | "description" | "owner_id" | "created_at" | "updated_at", ExtArgs["result"]["rENTALS"]>;
export type RENTALSInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MESSAGES?: boolean | Prisma.RENTALS$MESSAGESArgs<ExtArgs>;
    USERS?: boolean | Prisma.USERSDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.RENTALSCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $RENTALSPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RENTALS";
    objects: {
        MESSAGES: Prisma.$MESSAGESPayload<ExtArgs>[];
        USERS: Prisma.$USERSPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        surface: runtime.Decimal;
        price: runtime.Decimal;
        picture: string | null;
        description: string;
        owner_id: number;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["rENTALS"]>;
    composites: {};
};
export type RENTALSGetPayload<S extends boolean | null | undefined | RENTALSDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RENTALSPayload, S>;
export type RENTALSCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RENTALSFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RENTALSCountAggregateInputType | true;
};
export interface RENTALSDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RENTALS'];
        meta: {
            name: 'RENTALS';
        };
    };
    findUnique<T extends RENTALSFindUniqueArgs>(args: Prisma.SelectSubset<T, RENTALSFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RENTALSClient<runtime.Types.Result.GetResult<Prisma.$RENTALSPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RENTALSFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RENTALSFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RENTALSClient<runtime.Types.Result.GetResult<Prisma.$RENTALSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RENTALSFindFirstArgs>(args?: Prisma.SelectSubset<T, RENTALSFindFirstArgs<ExtArgs>>): Prisma.Prisma__RENTALSClient<runtime.Types.Result.GetResult<Prisma.$RENTALSPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RENTALSFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RENTALSFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RENTALSClient<runtime.Types.Result.GetResult<Prisma.$RENTALSPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RENTALSFindManyArgs>(args?: Prisma.SelectSubset<T, RENTALSFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RENTALSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RENTALSCreateArgs>(args: Prisma.SelectSubset<T, RENTALSCreateArgs<ExtArgs>>): Prisma.Prisma__RENTALSClient<runtime.Types.Result.GetResult<Prisma.$RENTALSPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RENTALSCreateManyArgs>(args?: Prisma.SelectSubset<T, RENTALSCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends RENTALSDeleteArgs>(args: Prisma.SelectSubset<T, RENTALSDeleteArgs<ExtArgs>>): Prisma.Prisma__RENTALSClient<runtime.Types.Result.GetResult<Prisma.$RENTALSPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RENTALSUpdateArgs>(args: Prisma.SelectSubset<T, RENTALSUpdateArgs<ExtArgs>>): Prisma.Prisma__RENTALSClient<runtime.Types.Result.GetResult<Prisma.$RENTALSPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RENTALSDeleteManyArgs>(args?: Prisma.SelectSubset<T, RENTALSDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RENTALSUpdateManyArgs>(args: Prisma.SelectSubset<T, RENTALSUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends RENTALSUpsertArgs>(args: Prisma.SelectSubset<T, RENTALSUpsertArgs<ExtArgs>>): Prisma.Prisma__RENTALSClient<runtime.Types.Result.GetResult<Prisma.$RENTALSPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RENTALSCountArgs>(args?: Prisma.Subset<T, RENTALSCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RENTALSCountAggregateOutputType> : number>;
    aggregate<T extends RENTALSAggregateArgs>(args: Prisma.Subset<T, RENTALSAggregateArgs>): Prisma.PrismaPromise<GetRENTALSAggregateType<T>>;
    groupBy<T extends RENTALSGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RENTALSGroupByArgs['orderBy'];
    } : {
        orderBy?: RENTALSGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RENTALSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRENTALSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RENTALSFieldRefs;
}
export interface Prisma__RENTALSClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    MESSAGES<T extends Prisma.RENTALS$MESSAGESArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RENTALS$MESSAGESArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MESSAGESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    USERS<T extends Prisma.USERSDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.USERSDefaultArgs<ExtArgs>>): Prisma.Prisma__USERSClient<runtime.Types.Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RENTALSFieldRefs {
    readonly id: Prisma.FieldRef<"RENTALS", 'Int'>;
    readonly name: Prisma.FieldRef<"RENTALS", 'String'>;
    readonly surface: Prisma.FieldRef<"RENTALS", 'Decimal'>;
    readonly price: Prisma.FieldRef<"RENTALS", 'Decimal'>;
    readonly picture: Prisma.FieldRef<"RENTALS", 'String'>;
    readonly description: Prisma.FieldRef<"RENTALS", 'String'>;
    readonly owner_id: Prisma.FieldRef<"RENTALS", 'Int'>;
    readonly created_at: Prisma.FieldRef<"RENTALS", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"RENTALS", 'DateTime'>;
}
export type RENTALSFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RENTALSSelect<ExtArgs> | null;
    omit?: Prisma.RENTALSOmit<ExtArgs> | null;
    include?: Prisma.RENTALSInclude<ExtArgs> | null;
    where: Prisma.RENTALSWhereUniqueInput;
};
export type RENTALSFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RENTALSSelect<ExtArgs> | null;
    omit?: Prisma.RENTALSOmit<ExtArgs> | null;
    include?: Prisma.RENTALSInclude<ExtArgs> | null;
    where: Prisma.RENTALSWhereUniqueInput;
};
export type RENTALSFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RENTALSSelect<ExtArgs> | null;
    omit?: Prisma.RENTALSOmit<ExtArgs> | null;
    include?: Prisma.RENTALSInclude<ExtArgs> | null;
    where?: Prisma.RENTALSWhereInput;
    orderBy?: Prisma.RENTALSOrderByWithRelationInput | Prisma.RENTALSOrderByWithRelationInput[];
    cursor?: Prisma.RENTALSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RENTALSScalarFieldEnum | Prisma.RENTALSScalarFieldEnum[];
};
export type RENTALSFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RENTALSSelect<ExtArgs> | null;
    omit?: Prisma.RENTALSOmit<ExtArgs> | null;
    include?: Prisma.RENTALSInclude<ExtArgs> | null;
    where?: Prisma.RENTALSWhereInput;
    orderBy?: Prisma.RENTALSOrderByWithRelationInput | Prisma.RENTALSOrderByWithRelationInput[];
    cursor?: Prisma.RENTALSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RENTALSScalarFieldEnum | Prisma.RENTALSScalarFieldEnum[];
};
export type RENTALSFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RENTALSSelect<ExtArgs> | null;
    omit?: Prisma.RENTALSOmit<ExtArgs> | null;
    include?: Prisma.RENTALSInclude<ExtArgs> | null;
    where?: Prisma.RENTALSWhereInput;
    orderBy?: Prisma.RENTALSOrderByWithRelationInput | Prisma.RENTALSOrderByWithRelationInput[];
    cursor?: Prisma.RENTALSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RENTALSScalarFieldEnum | Prisma.RENTALSScalarFieldEnum[];
};
export type RENTALSCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RENTALSSelect<ExtArgs> | null;
    omit?: Prisma.RENTALSOmit<ExtArgs> | null;
    include?: Prisma.RENTALSInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RENTALSCreateInput, Prisma.RENTALSUncheckedCreateInput>;
};
export type RENTALSCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RENTALSCreateManyInput | Prisma.RENTALSCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RENTALSUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RENTALSSelect<ExtArgs> | null;
    omit?: Prisma.RENTALSOmit<ExtArgs> | null;
    include?: Prisma.RENTALSInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RENTALSUpdateInput, Prisma.RENTALSUncheckedUpdateInput>;
    where: Prisma.RENTALSWhereUniqueInput;
};
export type RENTALSUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RENTALSUpdateManyMutationInput, Prisma.RENTALSUncheckedUpdateManyInput>;
    where?: Prisma.RENTALSWhereInput;
    limit?: number;
};
export type RENTALSUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RENTALSSelect<ExtArgs> | null;
    omit?: Prisma.RENTALSOmit<ExtArgs> | null;
    include?: Prisma.RENTALSInclude<ExtArgs> | null;
    where: Prisma.RENTALSWhereUniqueInput;
    create: Prisma.XOR<Prisma.RENTALSCreateInput, Prisma.RENTALSUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RENTALSUpdateInput, Prisma.RENTALSUncheckedUpdateInput>;
};
export type RENTALSDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RENTALSSelect<ExtArgs> | null;
    omit?: Prisma.RENTALSOmit<ExtArgs> | null;
    include?: Prisma.RENTALSInclude<ExtArgs> | null;
    where: Prisma.RENTALSWhereUniqueInput;
};
export type RENTALSDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RENTALSWhereInput;
    limit?: number;
};
export type RENTALS$MESSAGESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MESSAGESSelect<ExtArgs> | null;
    omit?: Prisma.MESSAGESOmit<ExtArgs> | null;
    include?: Prisma.MESSAGESInclude<ExtArgs> | null;
    where?: Prisma.MESSAGESWhereInput;
    orderBy?: Prisma.MESSAGESOrderByWithRelationInput | Prisma.MESSAGESOrderByWithRelationInput[];
    cursor?: Prisma.MESSAGESWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MESSAGESScalarFieldEnum | Prisma.MESSAGESScalarFieldEnum[];
};
export type RENTALSDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RENTALSSelect<ExtArgs> | null;
    omit?: Prisma.RENTALSOmit<ExtArgs> | null;
    include?: Prisma.RENTALSInclude<ExtArgs> | null;
};
