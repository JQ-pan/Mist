# == Schema Information
#
# Table name: libraries
#
#  id         :bigint           not null, primary key
#  game_id    :integer          not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require "test_helper"

class LibraryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
