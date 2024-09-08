export interface ProductColor {
  nome: string;
  codigo: string;
}

export interface Image {
  url: string;
  capa: boolean;
}

export interface Product {
  id: number;
  titulo: string;
  valor: string;
  descricao: string;
  categoria: string;
  cores: ProductColor[];
  tamanhos: string[];
  fotos: Image[];
}
