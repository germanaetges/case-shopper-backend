# E-COMMERCE SHOPPER 

<h6> Projeto de Back End - Case para seleção da Shopper </h6>

- Este é um projeto básico de back end de e-commerce, com funções de exibir produtos e criar pedidos.

## DOCUMENTAÇÃO DE FUNCIONAMENTO

* Clonar este repositório em uma pasta própria;
* Executar `npm install` para adicionar as dependências;
* Criar um arquivo .env na raiz do projeto e preencher as chaves a seguir com os valores apropriados:
   ```
   DB_HOST = 
   DB_USER = 
   DB_PASSWORD = 
   DB_NAME =  
   ```
* Executar `npm run migrations` para adicionar as tabelas ao banco de dados (em caso de sucesso, o servidor já estará pronto para receber requisições)

* Executar `npm run start` para rodar o servidor.

## Endpoints

* ### getProducts
  * Método: GET
  * Path: `/shopper/products`
  * Output: (retornará um erro se não encontrar)

    {
    "result": [
        {
            "id": 16,
            "name": "AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML",
            "price": 20.49,
            "qty_stock": 158
        },
    ]
    


### createOrder
* Método: POST
* Path: `/shopper/orders`
* Input: 
{
    "clientName": "Aline V",
    "dueDate": "2021-12-15",
    "list": [
        {
            "productId": 79,
            "productQuantity": 2
        },
        {
            "productId": 78,
            "productQuantity": 5
        }
    ]
}

* Output:

{
    "id": "eaf3bac7-ff57-4f9c-912c-fdd2ad2cc2ab",
    "clientName": "Aline V",
    "dueDate": "2021-12-15",
    "list": [
        {
            "productId": 79,
            "productQuantity": 2
        },
        {
            "productId": 78,
            "productQuantity": 5
        }
    ]
}


## LINGUAGENS UTILIZADAS

 <li> - Node.Js </li>
 <li> - MySQL </li>
 <li> - Typescript </li>
 <li> - Express </li>
 <li> - Knex </li>
 <li> - uuid </li>


