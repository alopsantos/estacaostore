import React from 'react';
import { Edit, Delete } from '@material-ui/icons';
import { Button } from '@material-ui/core';

function VendaItem({ venda }) {
    const { id, pessoa_id, tipomovimentacao_id, data, valortotal } = venda;


    return (
        <li className="venda-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/4048207?s=460&v=4" alt="" />
                <div className="venda-info">
                    <strong>{id}</strong>
                    <span>Hoje: <b>R$ {valortotal}</b></span>
                </div>
                <div className="btn-container venda-edit">
                    <Button size="small" color="primary" ><Edit fontSize="default" /></Button>
                    <Button size="small" color="secondary" ><Delete fontSize="default" /></Button>
                </div>
            </header>
        </li>
    );
}
export default VendaItem;