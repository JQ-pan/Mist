# == Schema Information
#
# Table name: games
#
#  id               :bigint           not null, primary key
#  title            :string           not null
#  description      :text             not null
#  developer        :string           not null
#  publisher        :string           not null
#  price            :decimal(8, 2)    not null
#  release_date     :string           not null
#  featured         :boolean          default(FALSE), not null
#  images           :string           default([]), not null, is an Array
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  long_description :text             not null
#  language         :text             default([]), not null, is an Array
#
require "test_helper"

class GameTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
