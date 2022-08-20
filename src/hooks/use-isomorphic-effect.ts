import { useEffect, useLayoutEffect } from 'react';
import { isSSR } from '~/lib/utils';

export const useIsomorphicEffect = isSSR ? useEffect : useLayoutEffect;
