import { generatePath } from 'react-router';

interface SwitchRoutes {
   root: string;
   detailMember: string;
}

export const switchRoutes: SwitchRoutes = {
   root: "/",
   detailMember: "/detailMember/:id"
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, "detailMember"> {
   detailMember: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
   ...switchRoutes,
   detailMember: id => generatePath(switchRoutes.detailMember, {id})
};