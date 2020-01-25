import React, { useState } from 'react';

function VendaFormAddd({ onSubmit }) {
    const [ pessoa_id, setPessoaId ] = useState('');
    const [ datavenda, setDataVenda ] = useState('');
    const [ valortotal, setValorTotal ] = useState('');

    async function handleAddMovimentacao(event) {
        event.preventDefault();
        await onSubmit({
            pessoa_id,
            datavenda,
            valortotal,
        });
        setPessoaId('');
        setDataVenda('');
        setValorTotal('');
    }
    return (
        <form id="edit-form" onSubmit={handleAddMovimentacao}>
            <div className="input-block">
                <label htmlFor="pessoa_id">Vendedor</label>
                <input 
                    name="pessoa_id"
                    id="pessoa_id"
                    required
                    value={pessoa_id}
                    onChange={event => setPessoaId(event.target.value)}
                 />
            </div>

            <div className="input-block">
                <label htmlFor="datavenda">Data</label>
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
                <label htmlFor="valortotal">Valor</label>
                <input 
                    name="valortotal" 
                    id="valortotal" 
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