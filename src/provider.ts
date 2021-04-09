import { BaseProvider } from '@ethersproject/providers';

import { Call, all as callAll } from './call';
import { getBalance } from './calls';

export default class Provider {
	provider?: BaseProvider;
	multicallAddress: string;

	constructor(multicallAddress: string) {
		this.multicallAddress = multicallAddress;
	}

	async init(provider: BaseProvider) {
		this.provider = provider;
	}

	getBalance(address: string) {
		if (!this.provider) {
			console.error('Provider should be initialized before use.');
		}
		return getBalance(address, this.multicallAddress);
	}

	async all(calls: Call[], block?: number) {
		if (!this.provider) {
			console.error('Provider should be initialized before use.');
		}
		const provider = this.provider as BaseProvider;
		return await callAll(provider, this.multicallAddress, calls, block);
	}
}
