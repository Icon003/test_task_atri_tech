import Vue from "vue"

Vue.filter("dateTransform", (value) => {
	return value.substring(0, 16)
})

Vue.filter("booleanTransform", (value) => {
	return Boolean(value) === true ? "Yes" : "No"
})

Vue.filter("conversionStringToName", (value) => {
	const regular = /_/gi;
	return value.replace(regular, " ")
})
