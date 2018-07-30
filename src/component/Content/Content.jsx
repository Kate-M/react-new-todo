import React from 'react';
import Form from '../Form/Form';
import '../../styles/common-style.scss';
import './Content.scss';

const Content = () => (
    <main>
        <div className="container">
            <section className="controls-task-main">
                <div className="control-item add-task">
                    <Form action="add" />
                </div>
            </section>
        </div>
    </main>
);

export default Content;
