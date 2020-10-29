
class CodeAndMsg {
  CODE: number;
  MESSAGE: string;
}

export class ErrorCode {
  static readonly ParamsError: CodeAndMsg = { CODE: 2,MESSAGE: "参数错误" }
}
