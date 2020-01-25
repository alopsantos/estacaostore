import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import './styles.css';
import VendaItem from '../../components/Vendas/VendaItem';
import VendaFormAdd from '../../components/Vendas/VendaFormAdd';
import VendaFormUpdate from '../../components/Vendas/VendaFormUpdate';

function Venda() {
    const [movimentacoes, setMovimentacoes] = useState([]);
    const [atualMovimentacao, setAtualMovimentacao] = useState('');
    const [editMode, setEditModde] = useState(false);

    async function loadMovimentacoes() {
        const response = await api.get('/movimentacoes');
        setMovimentacoes(response.data);
    }

    useEffect(() => {
        loadMovimentacoes()
    }, []);
    async function handleAddMovimentacao(data) {
        const response = await api.post(`/pessoas/1/movimentacao`, data);
        setMovimentacoes([response.data, ...movimentacoes]);
    }
    async function handleUpdate(data) {
        await api.put(`/movimentacoes/${atualMovimentacao.id}`, data);

        loadMovimentacoes();
        setMode();
    }

    async function handleDelete(data) {
        await api.delete(`/movimentacoes/${atualMovimentacao.id}`, data);
        const filterMovimentacao = movimentacoes.filter(movimentacao => movimentacao.id !== data.id);

        setMode(filterMovimentacao);
    }

    function loadMode() {
        if (editMode) {
            return (
                <aside>
                    <strong>Editar Venda</strong>
                    <VendaFormUpdate onUpdataForm={handleUpdate} onCancela={setMode} movimentacao={atualMovimentacao} />
                </aside>
            )
        } else {
            return (
                <aside>
                    <strong>Editar Venda</strong>
                    <VendaFormAdd onSubmit={handleAddMovimentacao} />
                </aside>
            )
        }
    }
    function setMode(data) {
        if (!editMode) {
            setEditModde(true);
            setAtualMovimentacao(data);
        } else {
            setEditModde(false);
        }
    }
    return (
        <>
            {loadMode()}
            <main>
                <ul>
                    {movimentacoes.map(movimentacao => (
                        <VendaItem key={movimentacao.id} movimentacao={movimentacao} onDeleteForm={handleDelete} onUpdateClick={setMode} />
                    ))}
                </ul>
            </main>
        </>
    );
}

export default Venda;