require "application_system_test_case"

class PontuacaosTest < ApplicationSystemTestCase
  setup do
    @pontuacao = pontuacaos(:one)
  end

  test "visiting the index" do
    visit pontuacaos_url
    assert_selector "h1", text: "Pontuacaos"
  end

  test "creating a Pontuacao" do
    visit pontuacaos_url
    click_on "New Pontuacao"

    fill_in "Pontos", with: @pontuacao.pontos
    click_on "Create Pontuacao"

    assert_text "Pontuacao was successfully created"
    click_on "Back"
  end

  test "updating a Pontuacao" do
    visit pontuacaos_url
    click_on "Edit", match: :first

    fill_in "Pontos", with: @pontuacao.pontos
    click_on "Update Pontuacao"

    assert_text "Pontuacao was successfully updated"
    click_on "Back"
  end

  test "destroying a Pontuacao" do
    visit pontuacaos_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Pontuacao was successfully destroyed"
  end
end
