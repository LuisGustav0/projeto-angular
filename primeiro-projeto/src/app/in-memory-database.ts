import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Categoria } from './views/categoria/shared/categoria.model';

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const listaCategoria: Categoria[] = [
      { id: 1, descricao: 'Moradia', observacao: 'Pagamentos de Contas da Casa' },
      { id: 2, descricao: 'Saúde', observacao: 'Plano de Saúde e Remédios' },
      { id: 3, descricao: 'Lazer', observacao: 'Cinema, parques, praia, etc' },
      { id: 4, descricao: 'Salário', observacao: 'Recebimento de Salário' },
      { id: 5, descricao: 'Freelas', observacao: 'Trabalhos como freelancer' }
    ];

    return { listaCategoria };
  }
