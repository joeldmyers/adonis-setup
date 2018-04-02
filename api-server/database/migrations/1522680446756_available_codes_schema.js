'use strict'

const Schema = use('Schema')

class AvailableCodesSchema extends Schema {
  up () {
    this.create('available_codes', (table) => {
      table.increments()
      table.timestamps()
      table.string('coupon_code', 32).notNullable()
      table.string('code_type', 32).notNullable()
    })
  }

  down () {
    this.drop('available_codes')
  }
}

module.exports = AvailableCodesSchema
