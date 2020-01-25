import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';

function VendaFormUpdate({ movimentacao, onCancela, onUpdateForm }) {
    const { atualMovimentacao, setAtualMovimentacao } = useState('');
    const { vendedor, setVendedor } = useState('');
    const { datavenda, setDataVenda } = useState('');
    const { valortotal, setValorTotal } = useState('');

    useEffect(() => {
        setAtualMovimentacao(movimentacao);
    }, [movimentacao, setAtualMovimentacao]);

    async function handleSubmit(event) {
        event.preventDefault();
        await onUpdateForm({
            vendedor,
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
                <labe htmlFor="pessoaid">Vendedor: {atualMovimentacao}</labe>
                <input 
                    name="vendedor" 
                    id="vendedor" 
                    required
                    value={vendedor}
                    onChange={event => setVendedor(event.target.value)}
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