import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

import api from '../../services/api';

import './styles.css';
import VendaItem from '../../components/Vendas/VendaItem';
import VendaFormAdd from '../../components/Vendas/VendaFormAdd';
import VendaFormUpdate from '../../components/Vendas/VendaFormUpdate';

function Venda() {
    const [ movimentacoes, setMovimentacoes ] = useState([]);
    const [ atualMovimentacao, setAtualMovimentacao ] = useState('');
    const [editMode, setEditModde] = useState(false);

    async function loadMovimentacoes(){
        console.log('testes');
        const response = await api.get('/movimentacoes');
        setMovimentacoes(response.data);
    }
    
    useEffect(() =>{
        loadMovimentacoes()
    }, []);
    
    function loadMode() {
        if (editMode) {
            return (
                <aside>
                    <strong>Editar Venda</strong>

                    <VendaFormUpdate />
                </aside>
            )
        } else {
            return (
                <aside>
                    <strong>Editar Venda</strong>

                    <VendaFormAdd />
                </aside>
            )
        }
    }
    return (
        <>
            {loadMode()}

            <main>
                <ul>
                    {movimentacoes.map(venda => (
                        <VendaItem key={venda.id} venda={venda} />
                    ))}
                </ul>
            </main>
        </>
    );
}

export default Venda;