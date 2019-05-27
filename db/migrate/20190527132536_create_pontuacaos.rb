class CreatePontuacaos < ActiveRecord::Migration[5.2]
  def change
    create_table :pontuacaos do |t|
      t.numeric :pontos

      t.timestamps
    end
  end
end
