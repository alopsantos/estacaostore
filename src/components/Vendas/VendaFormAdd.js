import React, { useState, useEffect } from 'react';

function VendaFormAddd() {
    return (
        <form>
            <div className="input-block">
                <labe htmlFor="">Vendedor</labe>
                <input name="vendedor" id="vendedor" required />
            </div>

            <div className="input-block">
                <labe htmlFor="">Data</labe>
                <input type="date" name="datavenda" id="datavenda" required />
            </div>

            <div className="input-block">
                <labe htmlFor="">Valor</labe>
                <input name="valor" id="valor" required />
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