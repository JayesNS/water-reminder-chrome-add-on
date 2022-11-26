import React from 'react';

import './Page.css';

const Page = React.forwardRef<HTMLElement, PageProps>((props, forwardedRef) => {
    const {footer, header, body} = props;

    return (
        <section ref={forwardedRef} className="Page">
            <header className="Page__header">
                {header}
            </header>
            <main className="Page__body">
                {body}
            </main>
            <footer className="Page__footer">
                {footer}
            </footer>
        </section>
    );
});

interface PageProps {    
    ref: React.ForwardedRef<HTMLElement>;
    body: React.ReactElement;
    footer?: React.ReactElement;
    header: React.ReactElement;
}

Page.displayName = 'Page';

export default Page;