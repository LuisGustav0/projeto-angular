import { BaseEntityImpl } from 'src/app/base/core/services/entity/base-entity-impl';
import { BaseEntity } from 'src/app/base/core/services/entity/base-entity';

export class Categoria extends BaseEntityImpl implements BaseEntity {
  descricao?: string;
  observacao?: string;
}
