import {ArgumentMetadata, Injectable, PipeTransform} from '@nestjs/common';

@Injectable()
export class ThemeParseNamePipe implements PipeTransform<string, string [] | string> {
  transform(value: string, metadata: ArgumentMetadata) {
    if (metadata.type !== "query") {
      return value;
    }
    return value.split(',');
  }
}
