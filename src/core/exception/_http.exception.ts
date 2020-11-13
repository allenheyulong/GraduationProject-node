import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorCode } from '../../constants/error';

interface _httpExceptionData {
  errorCode?: number;
  message?: string;
}

// XXX: 为了更加语义化，需要定义统一错误码
// ~ErrorCode 中可以对所有HTTP 错误相关的代码进行定制
export class _httpException extends HttpException {
  constructor(expData: _httpExceptionData) {
    if (typeof expData.errorCode === 'undefined') {
      expData.errorCode = ErrorCode.ParamsError.CODE;
    }
    super(expData, HttpStatus.OK);
  }
}
