import React, { useState } from 'react';

function VendaFormAddd({ movimentacao, onSubmit }) {
    const { pessoaid, setPessoaId } = useState('');
    const { datavenda, setDataVenda } = useState('');
    const { valortotal, setValorTotal } = useState('');

    async function handleAddMovimentacao(event) {
        event.preventDefault();
        await onSubmit({
            pessoaid,
            datavenda,
            valortotal,
        });
    }
    return (
        <form id="edit-form" onSubmit={handleAddMovimentacao}>
            <div className="input-block">
                <labe htmlFor="pessoaid">Vendedor</labe>
                <input 
                    name="pessoaid"
                    id="pessoaid"
                    required
                    value={pessoaid}
                    onChange={event => setPessoaId(event.target.value)}
                 />
            </div>

            <div className="input-block">
                <labe htmlFor="datavenda">Data</labe>
                <input 
                    type="date" 
                    name="datavenda" 
                    id="datavenda" 
                    required
                    value={datavenda}
                    onChange={event => setDataVenda(event.target.value)}
                />
            </div>

            <div className="input-block">
                <labe htmlFor="valortotal">Valor</labe>
                <input 
                    name="valor" 
                    id="valor" 
                    required
                    value={valortotal}
                    onChange={event => setValorTotal(event.target.value)}
                />
            </div>
            <div className="input-group">
                <div className="input-block">
                </div>
                <div className="input-block">
                    <button type="submit">Cadastrar</button>
                </div>
            </div>
        </form>
    );
}
export default VendaFormAddd;