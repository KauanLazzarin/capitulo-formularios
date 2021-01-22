const produtos = [
    {nome: 'Notebook', propriedades: ['16gb ram', '512gb']},
    {nome: 'Smartphone', propriedades: ['2gb ram', '128gb']},
];

function ProductTable () {

    return (
        <div>
            {   
                produtos.map((produto, index) => {
                    return <div>
                        <h2>{produto.nome}</h2>
                        {
                            produto.propriedades.map((propriedade) => {
                                return <p>{propriedade}</p>
                            }) 
                        }
                    </div>
                })
            }
        </div>
    );

};

export default function Products () {

    return (
        <div>
            <ProductTable />
        </div>
    );
};