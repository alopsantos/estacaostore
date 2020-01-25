import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import './styles.css';
import VendaItem from '../../components/Vendas/VendaItem';
import VendaFormAdd from '../../components/Vendas/VendaFormAdd';
import VendaFormUpdate from '../../components/Vendas/VendaFormUpdate';

function Venda() {
    const [movimentacoes, setMovimentacoes] = useState([]);
    const [atualMovimentacao, setAtualMovimentacao] = useState('');
    const [editMode, setEditMode] = useState(false);

    async function loadMovimentacoes() {
        const response = await api.get('/movimentacoes');
        setMovimentacoes(response.data);
    }

    useEffect(() => {
        loadMovimentacoes();
    }, []);

    async function handleAddMovimentacao(data) {
        const response = await api.post(`/pessoas/${data.pessoa_id}/movimentacao`, data);
        setMovimentacoes([response.data, ...movimentacoes]);
    }
    async function handleUpdate(data) {
        await api.put(`/movimentacoes/${atualMovimentacao.id}`, data);

        loadMovimentacoes();
        setMode();
    }

    async function handleDelete(data) {
        await api.delete(`/movimentacoes/${data.id}`, data);
        const filterMovimentacao = movimentacoes.filter(movimentacao => movimentacao.id !== data.id);

        setMovimentacoes(filterMovimentacao);
    }

    function loadMode() {
        if (editMode) {
            return (
                <aside>
                    <strong>Editar Venda</strong>
                    <VendaFormUpdate onUpdataForm={handleUpdate} onCancela={setMode} venda={atualMovimentacao} />
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
            setEditMode(true);
            setAtualMovimentacao(data);
        } else {
            setEditMode(false);
        }
    }
    return (
        <>
            {loadMode()}
            <main>
                <ul>
                    {movimentacoes.map(venda => (
                        <VendaItem key={venda.id} venda={venda} onDeleteForm={handleDelete} onUpdateClick={setMode} />
                    ))}
                </ul>
            </main>
        </>
    );
}

export default Venda;