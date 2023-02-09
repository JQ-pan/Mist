# == Schema Information
#
# Table name: games
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  description  :text             not null
#  developer    :string           not null
#  publisher    :string           not null
#  price        :integer          not null
#  release_date :date             not null
#  featured     :boolean          default(FALSE), not null
#  image        :string           default(""), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
require "test_helper"

class GameTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
