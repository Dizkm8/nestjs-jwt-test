import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateAuthDto {
  @MinLength(11, {
    message: 'El rut debe tener 11 caracteres',
  })
  @MaxLength(12, {
    message: 'El rut debe tener 12 caracteres',

  })
  rut: string;

  @MinLength(8)
  password: string;
}
