<template>
  <div class="pokemon-detail">
    <div class="pokemon-detail__image">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/395.png" alt="pokemon">
    </div>
    <div class="pokemon-detail__number">#395</div>
    <div class="pokemon-detail__name">Empoleon</div>
    <div class="pokemon-detail__species">Emperor Pokemon</div>
    <div class="pokemon-detail__types">
      <Tag>Grass</Tag>
      <Tag>Grass</Tag>
      <Tag>Grass</Tag>
      <Tag>Grass</Tag>
    </div>
    <div class="pokemon-detail__desc">
      <div class="pokemon-detail__label">POKEDEX ENTRY</div>
      <div class="desc-info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laboriosam aut ad blanditiis. Obcaecati eum, quisquam aspernatur fugiat et ratione facilis neque sit, itaque natus nostrum accusantium aliquam assumenda numquam!
      </div>
    </div>
    <div class="pokemon-detail__abilities">
      <div class="pokemon-detail__label">ABILITIES</div>
      <div class="grid grid-cols-2 gap-4">
        <div class="pokemon-detail__focus">Torrent</div>
        <div class="pokemon-detail__focus hidden-skill">Defiant
          <img src="@/assets/hide-icon.svg" >
        </div>
      </div>
    </div>

    <!-- INFO BASE -->
    <div class="grid grid-cols-2 gap-4 pokemon-detail__abilities-next">
      <div>
        <div class="pokemon-detail__label">HEIGHT</div>
        <div class="pokemon-detail__focus">1.7m</div>
      </div>
      <div>
        <div class="pokemon-detail__label">WEIGHT</div>
        <div class="pokemon-detail__focus">1.7m</div>
      </div>
      <div>
        <div class="pokemon-detail__label">WEAKNESSES</div>
        <div class="pokemon-detail__focus">1.7m</div>
      </div>
      <div>
        <div class="pokemon-detail__label">BASE EXP</div>
        <div class="pokemon-detail__focus">1.7m</div>
      </div>
    </div>

    <div class="pokemon-detail__stats">
      <div class="pokemon-detail__label">STATS</div>
      <div class="grid grid-cols-7 gap-2">
        <div class="stats-item hp">
          <div class="item-label">HP</div>
          <div class="item-value">HP</div>
        </div>
        <div class="stats-item atk">
          <div class="item-label">ATK</div>
          <div class="item-value">HP</div>
        </div>
        <div class="stats-item def">
          <div class="item-label">DEF</div>
          <div class="item-value">HP</div>
        </div>
        <div class="stats-item spa">
          <div class="item-label">SpA</div>
          <div class="item-value">HP</div>
        </div>
        <div class="stats-item spo">
          <div class="item-label">SpO</div>
          <div class="item-value">HP</div>
        </div>
        <div class="stats-item spd">
          <div class="item-label">SPD</div>
          <div class="item-value">HP</div>
        </div>
        <div class="stats-item tot">
          <div class="item-label">TOT</div>
          <div class="item-value">HP</div>
        </div>
      </div>
    </div>

    <div class="pokemon-detail__evolution">
      <!--  -->
    </div>
    <div class="pokemon-detail__navigation">
      <!--  -->
    </div>
  </div>
</template>

<script>
import Tag from '@/components/Tag'

export default {
  name: 'PokemonDetail',
  components: {
    Tag
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
