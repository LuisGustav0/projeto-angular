import { InEntityImpl } from 'projects/innovation-ui/src/lib/module/service/entity/in-entity-impl';
import { InEntity } from './../../../../projects/innovation-ui/src/lib/module/service/entity/in-entity';

export class Category extends InEntityImpl implements InEntity {
    description?: string;
}
