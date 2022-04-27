export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// type FunctionType = Exclude<SomeTypes, string | number>;
// type NonFunctionType = Exclude<SomeTypes, FunctionType>;

// type FunctionType = Extract<SomeTypes, DebugType>

type NullableTypes = string | number | null | undefined;

type NonNullableType = NonNullable<NullableTypes>;


