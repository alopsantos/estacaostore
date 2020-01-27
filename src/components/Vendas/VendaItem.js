import React from 'react';
import ParserDataAsArray from '../../utils/parseDateAsArray';
import { Edit, Delete } from '@material-ui/icons';
import { Button } from '@material-ui/core';

function VendaItem({ venda, onDeleteForm, onUpdateClick  }) {
    const { id, pessoa_id, pessoanome, datavenda, valortotal } = venda;
    async function handleUpdateState(){
        await onUpdateClick({ id, pessoa_id, pessoanome });
    }
    async function handleDelete(){
        await onDeleteForm({ id });
    }

    return (
        <li className="venda-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/4048207?s=460&v=4" alt="teste" />
                <div className="venda-info">
                    <strong>{pessoanome}</strong>
                    <span><b>Hoje: </b>R$ {valortotal}</span>
                    <span><b>Data: </b>{ParserDataAsArray(datavenda)}</span>
                </div>
                <div className="btn-container venda-edit">
                    <Button size="small" color="primary" onClick={handleUpdateState}  ><Edit fontSize="default" /></Button>
                    <Button size="small" color="secondary" onClick={handleDelete} ><Delete fontSize="default" /></Button>
                </div>
            </header>
        </li>
    );
}
export default VendaItem;