import React, { useState } from 'react';
import LivrosCadastrados from './LivrosCadastrados';

export default function ModalCadastroLivro({carregarInfo}) {

    let [nomeLivro, setNomeLivro] = useState('');
    let [nomeAutor, setNomeAutor] = useState('');

    function manipuladorSubmit(e) {//Essa funcção evita que a pagina seja recarregada
        e.preventDefault();// A letra 'e' é a abreviação de 'event'

        carregarInfo({
            nomeAutor: nomeAutor,
            nomeLivro: nomeLivro
        })
        setNomeAutor('')
        setNomeLivro('')
    }
    return (
        <>
            <div className="modal fade bd-example-modal-lg" tabindex="-1" id="modalCadastrarLivro" role="dialog" aria-labelledby="modalCadastrarLivro" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <form style={{ margin: '35px auto'}} onSubmit={manipuladorSubmit}>
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Nome do Livro" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Nome do Autor" />
                                </div>
                                <button type="submit" className="btn btn-success">Cadastrar</button>
                            </div>
                        </form>

                    </div>
                </div>

           
            </div>
        </>
    );
}