import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type USERSModel = runtime.Types.Result.DefaultSelection<Prisma.$USERSPayload>;
export type AggregateUSERS = {
    _count: USERSCountAggregateOutputType | null;
    _avg: USERSAvgAggregateOutputType | null;
    _sum: USERSSumAggregateOutputType | null;
    _min: USERSMinAggregateOutputType | null;
    _max: USERSMaxAggregateOutputType | null;
};
export type USERSAvgAggregateOutputType = {
    id: number | null;
};
export type USERSSumAggregateOutputType = {
    id: number | null;
};
export type USERSMinAggregateOutputType = {
    id: number | null;
    email: string | null;
    name: string | null;
    password: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type USERSMaxAggregateOutputType = {
    id: number | null;
    email: string | null;
    name: string | null;
    password: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type USERSCountAggregateOutputType = {
    id: number;
    email: number;
    name: number;
    password: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type USERSAvgAggregateInputType = {
    id?: true;
};
export type USERSSumAggregateInputType = {
    id?: true;
};
export type USERSMinAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
    created_at?: true;
    updated_at?: true;
};
export type USERSMaxAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
    created_at?: true;
    updated_at?: true;
};
export type USERSCountAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type USERSAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.USERSWhereInput;
    orderBy?: Prisma.USERSOrderByWithRelationInput | Prisma.USERSOrderByWithRelationInput[];
    cursor?: Prisma.USERSWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | USERSCountAggregateInputType;
    _avg?: USERSAvgAggregateInputType;
    _sum?: USERSSumAggregateInputType;
    _min?: USERSMinAggregateInputType;
    _max?: USERSMaxAggregateInputType;
};
export type GetUSERSAggregateType<T extends USERSAggregateArgs> = {
    [P in keyof T & keyof AggregateUSERS]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUSERS[P]> : Prisma.GetScalarType<T[P], AggregateUSERS[P]>;
};
export type USERSGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.USERSWhereInput;
    orderBy?: Prisma.USERSOrderByWithAggregationInput | Prisma.USERSOrderByWithAggregationInput[];
    by: Prisma.USERSScalarFieldEnum[] | Prisma.USERSScalarFieldEnum;
    having?: Prisma.USERSScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: USERSCountAggregateInputType | true;
    _avg?: USERSAvgAggregateInputType;
    _sum?: USERSSumAggregateInputType;
    _min?: USERSMinAggregateInputType;
    _max?: USERSMaxAggregateInputType;
};
export type USERSGroupByOutputType = {
    id: number;
    email: string;
    name: string;
    password: string;
    created_at: Date | null;
    updated_at: Date | null;
    _count: USERSCountAggregateOutputType | null;
    _avg: USERSAvgAggregateOutputType | null;
    _sum: USERSSumAggregateOutputType | null;
    _min: USERSMinAggregateOutputType | null;
    _max: USERSMaxAggregateOutputType | null;
};
export type GetUSERSGroupByPayload<T extends USERSGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<USERSGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof USERSGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], USERSGroupByOutputType[P]> : Prisma.GetScalarType<T[P], USERSGroupByOutputType[P]>;
}>>;
export type USERSWhereInput = {
    AND?: Prisma.USERSWhereInput | Prisma.USERSWhereInput[];
    OR?: Prisma.USERSWhereInput[];
    NOT?: Prisma.USERSWhereInput | Prisma.USERSWhereInput[];
    id?: Prisma.IntFilter<"USERS"> | number;
    email?: Prisma.StringFilter<"USERS"> | string;
    name?: Prisma.StringFilter<"USERS"> | string;
    password?: Prisma.StringFilter<"USERS"> | string;
    created_at?: Prisma.DateTimeNullableFilter<"USERS"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"USERS"> | Date | string | null;
    MESSAGES?: Prisma.MESSAGESListRelationFilter;
    RENTALS?: Prisma.RENTALSListRelationFilter;
};
export type USERSOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    MESSAGES?: Prisma.MESSAGESOrderByRelationAggregateInput;
    RENTALS?: Prisma.RENTALSOrderByRelationAggregateInput;
    _relevance?: Prisma.USERSOrderByRelevanceInput;
};
export type USERSWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    AND?: Prisma.USERSWhereInput | Prisma.USERSWhereInput[];
    OR?: Prisma.USERSWhereInput[];
    NOT?: Prisma.USERSWhereInput | Prisma.USERSWhereInput[];
    name?: Prisma.StringFilter<"USERS"> | string;
    password?: Prisma.StringFilter<"USERS"> | string;
    created_at?: Prisma.DateTimeNullableFilter<"USERS"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"USERS"> | Date | string | null;
    MESSAGES?: Prisma.MESSAGESListRelationFilter;
    RENTALS?: Prisma.RENTALSListRelationFilter;
}, "id" | "email">;
export type USERSOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.USERSCountOrderByAggregateInput;
    _avg?: Prisma.USERSAvgOrderByAggregateInput;
    _max?: Prisma.USERSMaxOrderByAggregateInput;
    _min?: Prisma.USERSMinOrderByAggregateInput;
    _sum?: Prisma.USERSSumOrderByAggregateInput;
};
export type USERSScalarWhereWithAggregatesInput = {
    AND?: Prisma.USERSScalarWhereWithAggregatesInput | Prisma.USERSScalarWhereWithAggregatesInput[];
    OR?: Prisma.USERSScalarWhereWithAggregatesInput[];
    NOT?: Prisma.USERSScalarWhereWithAggregatesInput | Prisma.USERSScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"USERS"> | number;
    email?: Prisma.StringWithAggregatesFilter<"USERS"> | string;
    name?: Prisma.StringWithAggregatesFilter<"USERS"> | string;
    password?: Prisma.StringWithAggregatesFilter<"USERS"> | string;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"USERS"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"USERS"> | Date | string | null;
};
export type USERSCreateInput = {
    email: string;
    name: string;
    password: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    MESSAGES?: Prisma.MESSAGESCreateNestedManyWithoutUSERSInput;
    RENTALS?: Prisma.RENTALSCreateNestedManyWithoutUSERSInput;
};
export type USERSUncheckedCreateInput = {
    id?: number;
    email: string;
    name: string;
    password: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    MESSAGES?: Prisma.MESSAGESUncheckedCreateNestedManyWithoutUSERSInput;
    RENTALS?: Prisma.RENTALSUncheckedCreateNestedManyWithoutUSERSInput;
};
export type USERSUpdateInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    MESSAGES?: Prisma.MESSAGESUpdateManyWithoutUSERSNestedInput;
    RENTALS?: Prisma.RENTALSUpdateManyWithoutUSERSNestedInput;
};
export type USERSUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    MESSAGES?: Prisma.MESSAGESUncheckedUpdateManyWithoutUSERSNestedInput;
    RENTALS?: Prisma.RENTALSUncheckedUpdateManyWithoutUSERSNestedInput;
};
export type USERSCreateManyInput = {
    id?: number;
    email: string;
    name: string;
    password: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type USERSUpdateManyMutationInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type USERSUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type USERSScalarRelationFilter = {
    is?: Prisma.USERSWhereInput;
    isNot?: Prisma.USERSWhereInput;
};
export type USERSOrderByRelevanceInput = {
    fields: Prisma.USERSOrderByRelevanceFieldEnum | Prisma.USERSOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type USERSCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type USERSAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type USERSMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type USERSMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type USERSSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type USERSCreateNestedOneWithoutMESSAGESInput = {
    create?: Prisma.XOR<Prisma.USERSCreateWithoutMESSAGESInput, Prisma.USERSUncheckedCreateWithoutMESSAGESInput>;
    connectOrCreate?: Prisma.USERSCreateOrConnectWithoutMESSAGESInput;
    connect?: Prisma.USERSWhereUniqueInput;
};
export type USERSUpdateOneRequiredWithoutMESSAGESNestedInput = {
    create?: Prisma.XOR<Prisma.USERSCreateWithoutMESSAGESInput, Prisma.USERSUncheckedCreateWithoutMESSAGESInput>;
    connectOrCreate?: Prisma.USERSCreateOrConnectWithoutMESSAGESInput;
    upsert?: Prisma.USERSUpsertWithoutMESSAGESInput;
    connect?: Prisma.USERSWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.USERSUpdateToOneWithWhereWithoutMESSAGESInput, Prisma.USERSUpdateWithoutMESSAGESInput>, Prisma.USERSUncheckedUpdateWithoutMESSAGESInput>;
};
export type USERSCreateNestedOneWithoutRENTALSInput = {
    create?: Prisma.XOR<Prisma.USERSCreateWithoutRENTALSInput, Prisma.USERSUncheckedCreateWithoutRENTALSInput>;
    connectOrCreate?: Prisma.USERSCreateOrConnectWithoutRENTALSInput;
    connect?: Prisma.USERSWhereUniqueInput;
};
export type USERSUpdateOneRequiredWithoutRENTALSNestedInput = {
    create?: Prisma.XOR<Prisma.USERSCreateWithoutRENTALSInput, Prisma.USERSUncheckedCreateWithoutRENTALSInput>;
    connectOrCreate?: Prisma.USERSCreateOrConnectWithoutRENTALSInput;
    upsert?: Prisma.USERSUpsertWithoutRENTALSInput;
    connect?: Prisma.USERSWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.USERSUpdateToOneWithWhereWithoutRENTALSInput, Prisma.USERSUpdateWithoutRENTALSInput>, Prisma.USERSUncheckedUpdateWithoutRENTALSInput>;
};
export type USERSCreateWithoutMESSAGESInput = {
    email: string;
    name: string;
    password: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    RENTALS?: Prisma.RENTALSCreateNestedManyWithoutUSERSInput;
};
export type USERSUncheckedCreateWithoutMESSAGESInput = {
    id?: number;
    email: string;
    name: string;
    password: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    RENTALS?: Prisma.RENTALSUncheckedCreateNestedManyWithoutUSERSInput;
};
export type USERSCreateOrConnectWithoutMESSAGESInput = {
    where: Prisma.USERSWhereUniqueInput;
    create: Prisma.XOR<Prisma.USERSCreateWithoutMESSAGESInput, Prisma.USERSUncheckedCreateWithoutMESSAGESInput>;
};
export type USERSUpsertWithoutMESSAGESInput = {
    update: Prisma.XOR<Prisma.USERSUpdateWithoutMESSAGESInput, Prisma.USERSUncheckedUpdateWithoutMESSAGESInput>;
    create: Prisma.XOR<Prisma.USERSCreateWithoutMESSAGESInput, Prisma.USERSUncheckedCreateWithoutMESSAGESInput>;
    where?: Prisma.USERSWhereInput;
};
export type USERSUpdateToOneWithWhereWithoutMESSAGESInput = {
    where?: Prisma.USERSWhereInput;
    data: Prisma.XOR<Prisma.USERSUpdateWithoutMESSAGESInput, Prisma.USERSUncheckedUpdateWithoutMESSAGESInput>;
};
export type USERSUpdateWithoutMESSAGESInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    RENTALS?: Prisma.RENTALSUpdateManyWithoutUSERSNestedInput;
};
export type USERSUncheckedUpdateWithoutMESSAGESInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    RENTALS?: Prisma.RENTALSUncheckedUpdateManyWithoutUSERSNestedInput;
};
export type USERSCreateWithoutRENTALSInput = {
    email: string;
    name: string;
    password: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    MESSAGES?: Prisma.MESSAGESCreateNestedManyWithoutUSERSInput;
};
export type USERSUncheckedCreateWithoutRENTALSInput = {
    id?: number;
    email: string;
    name: string;
    password: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    MESSAGES?: Prisma.MESSAGESUncheckedCreateNestedManyWithoutUSERSInput;
};
export type USERSCreateOrConnectWithoutRENTALSInput = {
    where: Prisma.USERSWhereUniqueInput;
    create: Prisma.XOR<Prisma.USERSCreateWithoutRENTALSInput, Prisma.USERSUncheckedCreateWithoutRENTALSInput>;
};
export type USERSUpsertWithoutRENTALSInput = {
    update: Prisma.XOR<Prisma.USERSUpdateWithoutRENTALSInput, Prisma.USERSUncheckedUpdateWithoutRENTALSInput>;
    create: Prisma.XOR<Prisma.USERSCreateWithoutRENTALSInput, Prisma.USERSUncheckedCreateWithoutRENTALSInput>;
    where?: Prisma.USERSWhereInput;
};
export type USERSUpdateToOneWithWhereWithoutRENTALSInput = {
    where?: Prisma.USERSWhereInput;
    data: Prisma.XOR<Prisma.USERSUpdateWithoutRENTALSInput, Prisma.USERSUncheckedUpdateWithoutRENTALSInput>;
};
export type USERSUpdateWithoutRENTALSInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    MESSAGES?: Prisma.MESSAGESUpdateManyWithoutUSERSNestedInput;
};
export type USERSUncheckedUpdateWithoutRENTALSInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    MESSAGES?: Prisma.MESSAGESUncheckedUpdateManyWithoutUSERSNestedInput;
};
export type USERSCountOutputType = {
    MESSAGES: number;
    RENTALS: number;
};
export type USERSCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MESSAGES?: boolean | USERSCountOutputTypeCountMESSAGESArgs;
    RENTALS?: boolean | USERSCountOutputTypeCountRENTALSArgs;
};
export type USERSCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.USERSCountOutputTypeSelect<ExtArgs> | null;
};
export type USERSCountOutputTypeCountMESSAGESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MESSAGESWhereInput;
};
export type USERSCountOutputTypeCountRENTALSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RENTALSWhereInput;
};
export type USERSSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    password?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    MESSAGES?: boolean | Prisma.USERS$MESSAGESArgs<ExtArgs>;
    RENTALS?: boolean | Prisma.USERS$RENTALSArgs<ExtArgs>;
    _count?: boolean | Prisma.USERSCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["uSERS"]>;
export type USERSSelectScalar = {
    id?: boolean;
    email?: boolean;
    name?: boolean;
    password?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type USERSOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "name" | "password" | "created_at" | "updated_at", ExtArgs["result"]["uSERS"]>;
export type USERSInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MESSAGES?: boolean | Prisma.USERS$MESSAGESArgs<ExtArgs>;
    RENTALS?: boolean | Prisma.USERS$RENTALSArgs<ExtArgs>;
    _count?: boolean | Prisma.USERSCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $USERSPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "USERS";
    objects: {
        MESSAGES: Prisma.$MESSAGESPayload<ExtArgs>[];
        RENTALS: Prisma.$RENTALSPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        email: string;
        name: string;
        password: string;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["uSERS"]>;
    composites: {};
};
export type USERSGetPayload<S extends boolean | null | undefined | USERSDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$USERSPayload, S>;
export type USERSCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<USERSFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: USERSCountAggregateInputType | true;
};
export interface USERSDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['USERS'];
        meta: {
            name: 'USERS';
        };
    };
    findUnique<T extends USERSFindUniqueArgs>(args: Prisma.SelectSubset<T, USERSFindUniqueArgs<ExtArgs>>): Prisma.Prisma__USERSClient<runtime.Types.Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends USERSFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, USERSFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__USERSClient<runtime.Types.Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends USERSFindFirstArgs>(args?: Prisma.SelectSubset<T, USERSFindFirstArgs<ExtArgs>>): Prisma.Prisma__USERSClient<runtime.Types.Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends USERSFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, USERSFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__USERSClient<runtime.Types.Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends USERSFindManyArgs>(args?: Prisma.SelectSubset<T, USERSFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends USERSCreateArgs>(args: Prisma.SelectSubset<T, USERSCreateArgs<ExtArgs>>): Prisma.Prisma__USERSClient<runtime.Types.Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends USERSCreateManyArgs>(args?: Prisma.SelectSubset<T, USERSCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends USERSDeleteArgs>(args: Prisma.SelectSubset<T, USERSDeleteArgs<ExtArgs>>): Prisma.Prisma__USERSClient<runtime.Types.Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends USERSUpdateArgs>(args: Prisma.SelectSubset<T, USERSUpdateArgs<ExtArgs>>): Prisma.Prisma__USERSClient<runtime.Types.Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends USERSDeleteManyArgs>(args?: Prisma.SelectSubset<T, USERSDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends USERSUpdateManyArgs>(args: Prisma.SelectSubset<T, USERSUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends USERSUpsertArgs>(args: Prisma.SelectSubset<T, USERSUpsertArgs<ExtArgs>>): Prisma.Prisma__USERSClient<runtime.Types.Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends USERSCountArgs>(args?: Prisma.Subset<T, USERSCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], USERSCountAggregateOutputType> : number>;
    aggregate<T extends USERSAggregateArgs>(args: Prisma.Subset<T, USERSAggregateArgs>): Prisma.PrismaPromise<GetUSERSAggregateType<T>>;
    groupBy<T extends USERSGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: USERSGroupByArgs['orderBy'];
    } : {
        orderBy?: USERSGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, USERSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUSERSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: USERSFieldRefs;
}
export interface Prisma__USERSClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    MESSAGES<T extends Prisma.USERS$MESSAGESArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.USERS$MESSAGESArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MESSAGESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    RENTALS<T extends Prisma.USERS$RENTALSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.USERS$RENTALSArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RENTALSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface USERSFieldRefs {
    readonly id: Prisma.FieldRef<"USERS", 'Int'>;
    readonly email: Prisma.FieldRef<"USERS", 'String'>;
    readonly name: Prisma.FieldRef<"USERS", 'String'>;
    readonly password: Prisma.FieldRef<"USERS", 'String'>;
    readonly created_at: Prisma.FieldRef<"USERS", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"USERS", 'DateTime'>;
}
export type USERSFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.USERSSelect<ExtArgs> | null;
    omit?: Prisma.USERSOmit<ExtArgs> | null;
    include?: Prisma.USERSInclude<ExtArgs> | null;
    where: Prisma.USERSWhereUniqueInput;
};
export type USERSFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.USERSSelect<ExtArgs> | null;
    omit?: Prisma.USERSOmit<ExtArgs> | null;
    include?: Prisma.USERSInclude<ExtArgs> | null;
    where: Prisma.USERSWhereUniqueInput;
};
export type USERSFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.USERSSelect<ExtArgs> | null;
    omit?: Prisma.USERSOmit<ExtArgs> | null;
    include?: Prisma.USERSInclude<ExtArgs> | null;
    where?: Prisma.USERSWhereInput;
    orderBy?: Prisma.USERSOrderByWithRelationInput | Prisma.USERSOrderByWithRelationInput[];
    cursor?: Prisma.USERSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.USERSScalarFieldEnum | Prisma.USERSScalarFieldEnum[];
};
export type USERSFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.USERSSelect<ExtArgs> | null;
    omit?: Prisma.USERSOmit<ExtArgs> | null;
    include?: Prisma.USERSInclude<ExtArgs> | null;
    where?: Prisma.USERSWhereInput;
    orderBy?: Prisma.USERSOrderByWithRelationInput | Prisma.USERSOrderByWithRelationInput[];
    cursor?: Prisma.USERSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.USERSScalarFieldEnum | Prisma.USERSScalarFieldEnum[];
};
export type USERSFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.USERSSelect<ExtArgs> | null;
    omit?: Prisma.USERSOmit<ExtArgs> | null;
    include?: Prisma.USERSInclude<ExtArgs> | null;
    where?: Prisma.USERSWhereInput;
    orderBy?: Prisma.USERSOrderByWithRelationInput | Prisma.USERSOrderByWithRelationInput[];
    cursor?: Prisma.USERSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.USERSScalarFieldEnum | Prisma.USERSScalarFieldEnum[];
};
export type USERSCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.USERSSelect<ExtArgs> | null;
    omit?: Prisma.USERSOmit<ExtArgs> | null;
    include?: Prisma.USERSInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.USERSCreateInput, Prisma.USERSUncheckedCreateInput>;
};
export type USERSCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.USERSCreateManyInput | Prisma.USERSCreateManyInput[];
    skipDuplicates?: boolean;
};
export type USERSUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.USERSSelect<ExtArgs> | null;
    omit?: Prisma.USERSOmit<ExtArgs> | null;
    include?: Prisma.USERSInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.USERSUpdateInput, Prisma.USERSUncheckedUpdateInput>;
    where: Prisma.USERSWhereUniqueInput;
};
export type USERSUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.USERSUpdateManyMutationInput, Prisma.USERSUncheckedUpdateManyInput>;
    where?: Prisma.USERSWhereInput;
    limit?: number;
};
export type USERSUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.USERSSelect<ExtArgs> | null;
    omit?: Prisma.USERSOmit<ExtArgs> | null;
    include?: Prisma.USERSInclude<ExtArgs> | null;
    where: Prisma.USERSWhereUniqueInput;
    create: Prisma.XOR<Prisma.USERSCreateInput, Prisma.USERSUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.USERSUpdateInput, Prisma.USERSUncheckedUpdateInput>;
};
export type USERSDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.USERSSelect<ExtArgs> | null;
    omit?: Prisma.USERSOmit<ExtArgs> | null;
    include?: Prisma.USERSInclude<ExtArgs> | null;
    where: Prisma.USERSWhereUniqueInput;
};
export type USERSDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.USERSWhereInput;
    limit?: number;
};
export type USERS$MESSAGESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type USERS$RENTALSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type USERSDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.USERSSelect<ExtArgs> | null;
    omit?: Prisma.USERSOmit<ExtArgs> | null;
    include?: Prisma.USERSInclude<ExtArgs> | null;
};
