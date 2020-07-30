import { TransformationType } from '../../enums';
import { TransformOptions, ClassConstructor } from '..';

/**
 * This object represents metadata assigned to a property via the @Transform decorator.
 */
export interface TransformMetadata<T = unknown> {
  target: ClassConstructor<T>;

  type: 'transform';

  /**
   * The property name this metadata belongs to on the target (property only).
   */
  propertyName: string;

  /**
   * The custom transformation function provided by the user in the @Transform decorator.
   */
  transformFn: (value: any, obj: any, transformationType: TransformationType) => any;

  /**
   * Options passed to the @Transform operator for this property.
   */
  options: TransformOptions;
}
