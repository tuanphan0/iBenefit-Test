import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { appRouters } from './route.config';
const RouterSimple = () => {
    return (
        <>
            {appRouters &&
                appRouters
                    .filter((x: any) => x.isLayout)
                    .map((route: any) => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <Switch key={route.name}>
                                <Route path={route.path} component={route.component} />
                            </Switch>
                        );
                    })}
        </>
    );
};
export default RouterSimple;