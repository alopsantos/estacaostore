import React, { useState, useEffect } from 'react';
import api from '../../services/api';

function VendaFormAddd({ onSubmit }) {
    const [ vendedores, setVendedores ] = useState([]);
    const [ pessoa_id, setPessoaId ] = useState('');
    const [ datavenda, setDataVenda ] = useState('');
    const [ valortotal, setValorTotal ] = useState('');
    
    //const [ tipomovimentacao_id, setTipoMovimentacaoId ] = useState('');
    //const [ tipopagamento_id, setTipoPagamentoId ] = useState('');
    
    async function handleAddMovimentacao(event) {
        
        event.preventDefault();
        await onSubmit({
            pessoa_id,
            data: `${new Date()}`,
            datavenda,
            valortotal,
            tipomovimentacao_id : 2,
            tipopagamento_id : 13,
        });
        setPessoaId('');
        setDataVenda('');
        setValorTotal('');
    }
    async function carregarVendedor() {
        //const codigosetor = localStorage.getItem('codigosetor');
        const response = await api.get('/pessoas');

        setVendedores(response.data);
    }
    useEffect(() =>{
        carregarVendedor();
    }, []);
    return (
        <form id="edit-form" onSubmit={handleAddMovimentacao}>
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
                <label htmlFor="datavenda">Data</label>
                <select id="pessoa_id" required onChange={event => setPessoaId(event.target.value)} >
                    {vendedores.map(vendedor => (
                        <option key={vendedor.id} value={`${vendedor.id}`} >
                            {vendedor.id} - {vendedor.nome}
                        </option>
                    ))}
                </select>
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