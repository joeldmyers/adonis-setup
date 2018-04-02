'use strict'

const Schema = use('Schema')

class RedeemedCodesSchema extends Schema {
  up () {
    this.create('redeemed_codes', (table) => {
      table.increments()
      table.timestamps()
      table.string('coupon_code', 32).notNullable()
      table.string('customer_email', 64)
      table.string('charity', 64).notNullable()
      table.string('first_name', 64).notNullable()
      table.string('last_name', 64).notNullable()
    })
  }

  down () {
    this.drop('redeemed_codes')
  }
}

module.exports = RedeemedCodesSchema
