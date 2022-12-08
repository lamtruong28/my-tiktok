import { IChildren } from '~/interface';
import Header from '../components/Header';

function HeaderOnly({ children }: IChildren) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}
export default HeaderOnly;
