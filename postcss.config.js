import postcssPresetEnv from "postcss-preset-env";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import defaultPreset from "cssnano-preset-default"

const preset = defaultPreset({
  // 删除空样式
  discardEmpty: true,
  // 删除注释
  discardComments: true,
  // 对值进行排序
  orderedValues: true,
  // 对样式条目排序
  cssDeclarationSorter: true,
  // 格式化选择器和代码
  minifySelectors: true,
  minifyParams: true,
  // 合并规则
  mergeRules: true,
  // 合并选择器
  uniqueSelectors: true,
  // svg
  svgo:true,
  normalizeUrl: true,
})

export default {
  plugins : [
    postcssPresetEnv({ stage: 0 }),
    autoprefixer({}),
    cssnano(preset)
  ]
}