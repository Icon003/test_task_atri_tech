<template>
	<div id="app">
		<div class="main-page">
			<AppLoader :isLoading="isLoading"/>
			<div class="main-page__wrapper">
				<div class="main-page__content">
					<div class="main-page__container-control-panel-table">
						<ControlPanelTable
						title="Currencies info"
						:dropdownData="dropdownData"
						@search="setSearchValue($event)"
						@changeCompositionTable="changeCompositionTable($event)"/>
					</div>
					<div class="main-page__container-table">
						<AppTable>
							<template v-slot:thead>
								<AppTableTr>
									<AppTableTh v-show="сolumnVisibilityStatus('last_update_at')" @click="sortByDate('last_update_at')">Last update</AppTableTh>
									<AppTableTh v-show="сolumnVisibilityStatus('code')" @click="sortByName('code')">Code</AppTableTh>
									<AppTableTh v-show="сolumnVisibilityStatus('name')" @click="sortByName('name')">Fullname</AppTableTh>
									<AppTableTh v-show="сolumnVisibilityStatus('deposit_enabled')" @click="sortByBoolean('deposit_enabled')">Enabled deposit</AppTableTh>
									<AppTableTh v-show="сolumnVisibilityStatus('withdrawal_enabled')" @click="sortByBoolean('withdrawal_enabled')">Enabled Withdrawal</AppTableTh>
									<AppTableTh v-show="сolumnVisibilityStatus('trading_enabled')" @click="sortByBoolean('trading_enabled')">Enabled Trading</AppTableTh>
								</AppTableTr>
							</template>
							<template v-slot:tbody>
								<AppTableTr v-for="item of resultDataTable" :key="item.id">
									<AppTableTd v-show="сolumnVisibilityStatus('last_update_at')">{{ item.last_update_at | dateTransform}}</AppTableTd>
									<AppTableTd v-show="сolumnVisibilityStatus('code')">{{ item.code }}</AppTableTd>
									<AppTableTd v-show="сolumnVisibilityStatus('name')">{{ item.name }}</AppTableTd>
									<AppTableTd v-show="сolumnVisibilityStatus('deposit_enabled')">{{ item.deposit_enabled | booleanTransform }}</AppTableTd>
									<AppTableTd v-show="сolumnVisibilityStatus('withdrawal_enabled')">{{ item.withdrawal_enabled | booleanTransform }}</AppTableTd>
									<AppTableTd v-show="сolumnVisibilityStatus('trading_enabled')">{{ item.trading_enabled | booleanTransform }}</AppTableTd>
								</AppTableTr>
							</template>
						</AppTable>
					</div>
					<div class="main-page__container-status-label">
						<span class="main-page__status-label">Total: {{ totalCountRow }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";

import AppLoader from "./components/AppLoader.vue";
import ControlPanelTable from "./components/ControlPanelTable.vue";
import AppTable from "./components/AppTable.vue";
import AppTableTr from "./components/AppTableTr.vue";
import AppTableTh from "./components/AppTableTh.vue";
import AppTableTd from "./components/AppTableTd.vue";

export default {
	name: "App",
	components: {
		AppLoader,
		ControlPanelTable,
		AppTable,
		AppTableTr,
		AppTableTh,
		AppTableTd
	},
	data() {
		return {
			isLoading: true,
			tableData: [],
			dropdownData: [
				{ id: 1, name: "Last update", value: "last_update_at", status: true },
				{ id: 2, name: "Code", value: "code", status: true },
				{ id: 3, name: "Fullname", value: "name", status: true },
				{ id: 4, name: "Enabled deposit", value: "deposit_enabled", status: true },
				{ id: 5, name: "Enabled Withdrawal", value: "withdrawal_enabled", status: true },
				{ id: 6, name: "Enabled Trading", value: "trading_enabled", status: true },
			],
			isSorting: false,
			currentSortField: "",
			searchString: ""
		}
	},
	async created() {
		try {
			const response = await axios.get("https://raw.githubusercontent.com/a-mazalov/file-storage/main/currencies.json")
			this.tableData = response?.data
			this.switchLoadingStatus()
		} catch (error) {
			console.error(error)
		}
	},
	computed: {
		lengthVisibilityStatus() {
			return this.dropdownData.filter(item => item.status === true).length
		},
		сolumnVisibilityStatus(key) {
			return (key) => {
				let resultItem = this.dropdownData.find(item => item.value === key)
				return resultItem?.status
			}
		},
		resultDataTable() {
			if(this.searchString.length > 0) {
				if(this.сolumnVisibilityStatus('code') === true && this.сolumnVisibilityStatus('name') === true) {
					return this.tableData.filter((item) => item.code.toLowerCase().includes(this.searchString.toLowerCase()) || item.name.toLowerCase().includes(this.searchString.toLowerCase()))
				} else if(this.сolumnVisibilityStatus('code') === true) {
					return this.tableData.filter((item) => item.code.toLowerCase().includes(this.searchString.toLowerCase()))
				} else if (this.сolumnVisibilityStatus('name') === true) {
					return this.tableData.filter((item) => item.name.toLowerCase().includes(this.searchString.toLowerCase()))
				} else {
					return this.tableData
				}
			} else {
				return this.tableData
			}
		},
		totalCountRow() {
			return this.resultDataTable ? this.resultDataTable.length : 0
		}
	},
	methods: {
		switchLoadingStatus() {
			this.isLoading = !this.isLoading;
		},
		changeCompositionTable(itemId) {
			let index = this.dropdownData.findIndex(item => item.id === itemId)
			this.dropdownData[index].status = !this.dropdownData[index].status
		},
		setSearchValue(value) {
			this.searchString = value
		},
		switchSortingStatus(field) {
			if(field === this.currentSortField) {
				this.isSorting = !this.isSorting
			} else {
				this.currentSortField = field
			}

		},
		sortByDate(field) {
			this.switchSortingStatus(field)
			this.tableData.sort((a, b) => this.isSorting === false ? new Date(a[field]) - new Date(b[field]) : new Date(b[field]) - new Date(a[field]))
		},
		sortByName(field) {
			this.switchSortingStatus(field)
			this.tableData.sort((a, b) => this.isSorting === false ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]))
		},
		sortByBoolean(field) {
			this.switchSortingStatus(field)
			this.tableData.sort((a, b) => this.isSorting === false ? Boolean(a[field]) - Boolean(b[field]): Boolean(b[field]) - Boolean(a[field]))
		},
	}
};
</script>

<style>
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
.main-page {
	width: 100%;
	height: 100vh;
}
.main-page__wrapper {
	max-width: 1440px;
	margin: 0 auto;
}

.main-page__content {
	width: 100%;
	padding: 52px;
}
.main-page__container-control-panel-table {
}
.main-page__container-table {
}
.main-page__container-status-label {
	display: flex;

	justify-content: flex-end;
	align-items: center;

	width: 100%;
	padding-top: 12px;
	padding-right: 30px;
	padding-bottom: 12px;
	padding-left: 30px;

	border-right: 1px solid var(--main-border-table-color);
	border-bottom: 1px solid var(--main-border-table-color);
	border-left: 1px solid var(--main-border-table-color);
}
.main-page__status-label {
	font-family: "Roboto";
	font-size: 16px;
}

</style>
