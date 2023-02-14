# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  game_id    :integer          not null
#  buyer_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require "test_helper"

class CartItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
