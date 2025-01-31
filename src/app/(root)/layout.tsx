import React from 'react';
import { ChildrenProps } from '../layout';

const MainLayout = ({children}: ChildrenProps) => {
    return (
        <div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default MainLayout;