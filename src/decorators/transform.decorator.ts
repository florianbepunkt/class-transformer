import { defaultMetadataStorage } from '../storage';
import { TransformOptions } from '../interfaces';
import { TransformationType } from '../enums';

/**
 * Defines a custom logic for value transformation.
 *
 * Can be applied to properties only.
 */
export function Transform(
  transformFn: (value: any, obj: any, transformationType: TransformationType) => any,
  options: TransformOptions = {}
): PropertyDecorator {
  return function (target: any, propertyName: string | Symbol): void {
    defaultMetadataStorage.setMetaData({
      target: target.constructor,
      type: 'transform',
      propertyName: propertyName as string,
      transformFn,
      options,
    });
  };
}
