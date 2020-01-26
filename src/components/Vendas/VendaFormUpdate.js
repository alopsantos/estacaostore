import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';

function VendaFormUpdate({ onUpdataForm, onCancela, venda }) {
    const [ atualMovimentacao, setAtualMovimentacao ] = useState('');
    const [ pessoa_id, setPessoaId ] = useState('');
    const [ datavenda, setDataVenda ] = useState('');
    const [ valortotal, setValorTotal ] = useState('');

    useEffect(() => {
        setAtualMovimentacao(venda);
    }, [venda]);

    async function handleSubmit(event) {
        console.log(pessoa_id);
        event.preventDefault();
        await onUpdataForm({
            pessoa_id : atualMovimentacao.pessoa_id,
            datavenda,
            valortotal,
        });
    }
    function handleExit(event) {
        event.preventDefault();
        onCancela();
    }
    return (
        <form id="edit-form" onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="">Vendedor:{atualMovimentacao.pessoa_id} </label>
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
                    <Button className="Button" onClick={handleExit}>Cancelar</Button>
                </div>
                <div className="input-block">
                    <Button className="Button" form="edit-form" type="submit">Atualizar</Button>
                </div>
            </div>
        </form>
    );
}
export default VendaFormUpdate;