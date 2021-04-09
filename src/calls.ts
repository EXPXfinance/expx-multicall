import * as multicallAbi from './abi/multicall.json';

import Contract from './contract';

export function getBalance(address: string, multicallAddress: string) {
	const multicall = new Contract(multicallAddress, multicallAbi.abi);
	return multicall.getBalance(address);
}
